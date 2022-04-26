import { useParams } from 'solid-app-router';
import { createSignal, lazy, onMount, Suspense } from 'solid-js';
import moment from 'moment';
import 'moment/locale/es';

const ProfileCard = lazy(() =>
  import('../../components/ProfileCard/ProfileCard')
);

const DayCard = lazy(() => import('../../components/DayCard/DayCard'));

moment.locale('es');

export default function User() {
  const params = useParams();
  const [userData, setUserData] = createSignal('');

  onMount(async () => {
    const res = await fetch(
      `https://mifranco.herokuapp.com/users/${params.id}`
    );
    const data = await res.json();
    return setUserData(data);
  });

  return (
    <>
      <div class="px-8 py-5 font-semibold">
        <Suspense fallback={<p>Loading...</p>}>
          <ProfileCard
            name={userData().name}
            lastname={userData().lastname}
            group={userData().group}
            tech={userData().tech}
          />
        </Suspense>
      </div>
      <p class="text-2xl text-left ml-8 mt-6">Lista de francos</p>
      <For each={userData().days} fallback={<p>Loading...</p>}>
        {(day) => {
          const today = moment();
          const freeday = moment(day);

          return freeday.diff(today, 'days') >= 0 &&
            freeday.format('dddd') !== 'domingo' ? (
            <DayCard
              date={freeday.format('DD/MM/YYYY')}
              dayName={freeday.format('dddd').toUpperCase()}
            />
          ) : (
            <></>
          );
        }}
      </For>
    </>
  );
}
