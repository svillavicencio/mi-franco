export default function Header() {
  return (
    <div class="bg-blue-500 p-6 flex items-center shadow-md">
      <div class="text-white font-bold text-2xl flex-none">
        <p class="cursor-pointer">miFranco ☕️</p>
      </div>
      <form class="flex flex-1 h-8">
        <input type="text" class="rounded-l-md flex-1 ml-10"></input>

        <button
          type="submit"
          class="bg-gray-300 p-2 rounded-r-md text-black flex items-center hover:bg-gray-600 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <p class="ml-1">Buscar</p>
        </button>
      </form>
    </div>
  );
}
