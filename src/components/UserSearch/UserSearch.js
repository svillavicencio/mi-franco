import { Link } from 'solid-app-router';

export default function UserSearch(props) {
  const { tech, name, lastname, _id } = props.user;
  const path = `/${_id}`;
  return (
    <Link
      href={path}
      class="py-6 px-1 flex sm:px-4 justify-between items-stretch font-semibold"
    >
      <p class="">
        {name} {lastname}
      </p>
      <div>{tech}</div>
    </Link>
  );
}
