import { useParams } from 'solid-app-router';
import { createSignal, onMount, Suspense } from 'solid-js';

export default function User() {
  const params = useParams();
  const [userData, setUserData] = createSignal('');

  onMount(async () => {
    const res = await fetch(`http://localhost:8080/users/${params.id}`);
    const data = await res.json();
    console.log(data);
    return setUserData(data);
  });

  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <div>{userData().name}</div>
      </Suspense>
    </div>
  );
}
