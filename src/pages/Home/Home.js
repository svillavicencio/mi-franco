import moment from 'moment';
import { lazy } from 'solid-js';

const Today = lazy(() => import('../../containers/Today/Today'));
const Tomorrow = lazy(() => import('../../containers/Tomorrow/Tomorrow'));

export default function Home() {
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
