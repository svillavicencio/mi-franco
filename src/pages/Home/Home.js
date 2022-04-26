import moment from 'moment';
import { lazy } from 'solid-js';

const Today = lazy(() => import('../../containers/Today/Today'));
const Tomorrow = lazy(() => import('../../containers/Tomorrow/Tomorrow'));

export default function Home() {
  return (
    <div class="h-screen flex flex-col bg-white text-black mx-3 mt-4">
      <div class="flex items-center justify-between mx-4">
        <h1 class="text-center text-3xl font-bold ">Proximos francos</h1>
        <div class="text-center text-md font-medium bg-blue-400 p-2 ml-2 rounded-md text-black">
          🕑 {moment().format('dddd DD/MM/YYYY').toUpperCase()}
        </div>
      </div>
      <Today />
      <Tomorrow />
    </div>
  );
}
