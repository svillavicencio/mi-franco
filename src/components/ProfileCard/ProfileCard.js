export default function ProfileCard(props) {
  return (
    <div class="bg-blue-400 w-full rounded-md text-black sm:w-3/5">
      <div class="flex items-center justify-between p-5">
        <div class="flex flex-col sm:flex-row sm:justify-start justify-center items-center w-full text-left">
          <div class=" text-5xl mb-3 sm:mr-4">👨‍🔧</div>
          <div>
            <p>Nombre: {props.name}</p>
            <p>Apellido: {props.lastname}</p>
            <p>Grupo: {props.group}</p>
            <div>Movil: {props.tech}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
