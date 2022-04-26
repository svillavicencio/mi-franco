import { lazy, createSignal, onMount } from 'solid-js';

const UserCard = lazy(() => import('../../components/UserCard/UserCard'));

export default function Tomorrow() {
  const [users, setUsers] = createSignal([]);

  onMount(async () => {
    const res = await fetch('https://mifranco.herokuapp.com/users/tomorrow');
    const data = await res.json();
    console.log(data);
    return setUsers(data);
  });

  return (
    <div class="">
      <div class="flex flex-col justify-center items-center mt-5">
        <p class="text-2xl flex-1 text-center mb-8 font-semibold">Mañana</p>
        <div class="flex flex-col flex-1 w-3/4">
          <For each={users()} fallback={<p>Loading...</p>}>
            {(user) => <UserCard date="tomorrow" user={user} />}
          </For>
        </div>
      </div>
    </div>
  );
}
