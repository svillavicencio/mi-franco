import { lazy } from 'solid-js';

const UserCard = lazy(() => import('../../components/UserCard/UserCard'));

export default function Tomorrow() {
  return (
    <div class="grid-cols-6">
      <div class="flex justify-center items-center mt-10">
        <UserCard color="orange" />
        <p class="text-2xl flex-1 text-center">Mañana</p>
      </div>
    </div>
  );
}
