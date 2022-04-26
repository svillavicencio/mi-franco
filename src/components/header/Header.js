import { Link } from 'solid-app-router';
import { createSignal } from 'solid-js';
import users from '../../pages/Users/UsersContext';

export default function Header() {
  const [user, setUser] = users;

  return (
    <div class="flex  w-full bg-blue-500 p-6 flex-col sm:flex-row items-start sm:items-center shadow-md justify-between">
      <div class="text-white font-bold text-2xl flex-none">
        <Link href="/">
          <p class="cursor-pointer hover:text-gray-200">miFranco ☕️</p>
        </Link>
      </div>
      <Link href="/test" class="w-full flex-1 flex flex-col sm:items-end">
        <input
          type="text"
          class=" p-1 rounded-md w-3/4 sm:w-2/4 mt-2 transition ease-in-out duration-1000 delay-200 focus:transition-all focus:w-full sm:focus:w-3/4 bg-gray-200 placeholder:text-gray-500"
          placeholder="🔍 Buscar tecnico ..."
          onInput={(e) => setUser(e.currentTarget.value)}
        ></input>
      </Link>
    </div>
  );
}
