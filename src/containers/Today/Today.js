import UserCard from '../../components/UserCard/UserCard';
import moment from 'moment';

export default function Today() {
  const date = moment(Date.now()).format('DD/MM/YYYY');
  return (
    <div class="">
      <div class="flex justify-center items-center mt-5">
        <UserCard color="green" />
        <p class="text-2xl  flex-1 text-center">Hoy</p>
      </div>
    </div>
  );
}
