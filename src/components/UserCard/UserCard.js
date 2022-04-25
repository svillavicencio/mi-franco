export default function UserCard(props) {
  const { color } = props;
  const cssDiv = `bg-${color}-400 m-2 shadow-md rounded-md text-black p-6 grow divide-y`;
  return (
    <div class={cssDiv}>
      <div class="flex items-center justify-between divide">
        <div class="flex items-center">
          <p class="text-5xl mr-3 rounded-3xl p-2">🧑🏻‍🔧</p>
          <div>
            <p>Sergio Villavicencio</p>
            <p>G5D</p>
            <p>22BOD201</p>
          </div>
        </div>
        <p class="font-bold">10/10/2010</p>
      </div>
    </div>
  );
}
