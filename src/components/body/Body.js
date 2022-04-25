import Today from '../../containers/Today/Today';
import Tomorrow from '../../containers/Tomorrow/Tomorrow';
import moment from 'moment';

export default function Body() {
  return (
    <div class="h-screen flex flex-col bg-white text-black mx-3 mt-4">
      <div class="flex items-center justify-between mx-4">
        <h1 class="text-center text-3xl">Proximos francos:</h1>
        <p class="text-center text-xs">
          {moment(Date.now()).format('DD/MM/YYYY')}
        </p>
      </div>
      <Today />
      <Tomorrow />
    </div>
  );
}
