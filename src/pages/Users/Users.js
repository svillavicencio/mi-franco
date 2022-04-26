import { onMount, createSignal, createMemo, lazy } from 'solid-js';
import users from './UsersContext';

const UserSearch = lazy(() => import('../../components/UserSearch/UserSearch'));

export default function Users() {
  const [list, setList] = createSignal([]);
  const [user, setUser] = users;
  const filteredList = createMemo(() => {
    const input = new RegExp(user().toUpperCase());
    return list().filter(
      (user) =>
        user.tech.match(input) ||
        user.name.match(input) ||
        user.lastname.match(input)
    );
  });

  onMount(async () => {
    const res = await fetch('https://mifranco.herokuapp.com/users');
    setList(await res.json());
  });

  return (
    <div class="flex flex-col divide-y p-2 text-md">
      <For each={filteredList()} fallback={<p>Loading...</p>}>
        {(user) => <UserSearch user={user} />}
      </For>
    </div>
  );
}
