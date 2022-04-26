import moment from 'moment';

export default function UserCard(props) {
  const { user } = props;
  const { date } = props;

  const cssDiv = `${date} m-2 shadow-md rounded-md text-black p-6 grow`;
  return (
    <div class={cssDiv}>
      <div class="flex flex-col sm:flex-row items-center justify-between">
        <div class="flex flex-col sm:flex-row items-center font-semibold">
          <p class="text-5xl rounded-3xl mb-2 text-center">👨‍🔧</p>
          <div>
            <p class="text-center">
              {user.name} {user.lastname}
            </p>
            <p class="text-center sm:text-left">{user.tech}</p>
          </div>
        </div>
        <p class="font-bold">{moment(user.days[0]).format('DD/MM/YYYY')}</p>
      </div>
    </div>
  );
}
