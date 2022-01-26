export default function TopNavigationBar() {
  return (
    <section className="flex max-w-screen w-full p-2 gap-x-4 items-center justify-between md:(p-4 px-8) ">
      <div className="rounded-full mx-auto bg-true-gray-300 h-10 w-10 lg:(hidden)" />
      <SearhBar />
      <div className="bg-white rounded-full cursor-pointer mx-auto p-2 hover:(shadow-lg)">
        <img src="/icons/notification.svg" className="h-6 w-6" alt="bell" />
      </div>
      <div className="bg-white rounded-full cursor-pointer mx-auto p-2 hidden md:(block) hover:(shadow-lg)">
        <img src="/icons/setting.svg" className="h-6 w-6" alt="settings" />
      </div>
    </section>
  );
}

export function SearhBar() {
  return (
    <div className="bg-white rounded-xl flex flex-grow text-sm px-2 items-center justify-between md:order-first lg:w-10/12">
      <img
        src="/icons/search.svg"
        alt="search"
        className="h-4 w-4 lg:(h-8 w-8) "
      />
      <input
        className="bg-transparent w-full p-2 text-dark-100 md:py-4 focus:outline-none"
        placeholder="Search for something"
      />
      <button className="bg-primary rounded-xl font-bold text-white py-2 px-8 hidden capitalize md:block">
        Search
      </button>
    </div>
  );
}
