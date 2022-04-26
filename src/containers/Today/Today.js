import { createSignal, lazy, onMount } from 'solid-js';

const UserCard = lazy(() => import('../../components/UserCard/UserCard'));

export default function Today() {
  const [users, setUsers] = createSignal([]);

  onMount(async () => {
    const res = await fetch('https://mifranco.herokuapp.com/users/today');
    const data = await res.json();
    return setUsers(data);
  });

  return (
    <div>
      <div class="flex flex-col justify-center items-center mt-5 ">
        <p class="text-2xl pt-8 text-center font-semibold mb-8">Hoy</p>
        <div class="flex flex-col flex-1 w-3/4 ">
          <For each={users()} fallback={<p>Loading...</p>}>
            {(user) => <UserCard date="today" user={user} />}
          </For>
        </div>
      </div>
    </div>
  );
}
