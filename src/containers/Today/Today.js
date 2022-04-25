import { lazy } from 'solid-js';

const UserCard = lazy(() => import('../../components/UserCard/UserCard'));

export default function Today() {
  return (
    <div class="">
      <div class="flex justify-center items-center mt-5">
        <UserCard color="green" />
        <p class="text-2xl  flex-1 text-center">Hoy</p>
      </div>
    </div>
  );
}
