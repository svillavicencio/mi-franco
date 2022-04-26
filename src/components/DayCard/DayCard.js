export default function DayCard(props) {
  return (
    <div class="my-4 mx-8 px-4 py-4 sm:w-2/4 flex font-semibold  bg-gray-200 rounded-md ">
      <div class="mr-1">📅</div>
      <div class="w-full flex justify-between">
        <p>{props.date}</p>
        <p>{props.dayName}</p>
      </div>
    </div>
  );
}
