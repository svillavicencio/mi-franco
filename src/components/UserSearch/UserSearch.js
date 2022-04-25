import { Link } from 'solid-app-router';

export default function UserSearch(props) {
  const { tech, name, lastname, _id } = props.user;
  const path = `/${_id}`;
  return (
    <Link href={path} class="p-5 flex justify-between">
      <p>
        {name} {lastname}
      </p>
      <p>{tech}</p>
    </Link>
  );
}
