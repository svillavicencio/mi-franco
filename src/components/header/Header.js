import { Link } from 'solid-app-router';
import users from '../../pages/Users/UsersContext';

export default function Header() {
  const [user, setUser] = users;

  return (
    <div class="bg-blue-500 p-6 flex items-center shadow-md justify-between">
      <div class="text-white font-bold text-2xl flex-none">
        <Link href="/">
          <p class="cursor-pointer hover:text-gray-200">miFranco ☕️</p>
        </Link>
      </div>
      <Link href="/test" class=" flex-1 flex justify-end">
        <input
          type="text"
          class="p-1 rounded-md w-1/6 transition ease-in-out duration-1000 delay-200 focus:transition-all focus:w-2/4 bg-gray-200 placeholder:text-gray-500"
          placeholder="🔍 Buscar tecnico..."
          onInput={(e) => setUser(e.currentTarget.value)}
        ></input>
      </Link>
    </div>
  );
}
