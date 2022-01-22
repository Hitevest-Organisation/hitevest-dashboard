export default function NavigationDrawer({ page }) {
  return (
    <aside className="min-h-full p-4 w-64 hidden lg:block">
      <div>
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="pb-8">
        <div className="font-bold text-lg py-6 text-gray-300">Menu</div>
        <div className="flex flex-col space-y-4">
          <div className="bg-primary rounded-xl font-bold text-white py-2 px-8 capitalize">
            Dashboard
          </div>
          <div className="rounded-xl font-bold py-2 px-8 text-gray-300 capitalize">
            Investment
          </div>
          <div className="rounded-xl font-bold py-2 px-8 text-gray-300 capitalize hover:(text-primary bg-secondary) ">
            Desposit
          </div>
        </div>
      </div>

      <div className="rounded-lg flex flex-col space-y-4 shadow-lg p-4">
        <div className="text-center ">
          <div className="rounded-full mx-auto bg-gray-300 h-20 w-20" />
          <div className="font-bold text-sm py-4 text-gray-700">
            Sandy Oluwatobi
          </div>
        </div>

        <button className="bg-primary rounded-xl font-bold bg-opacity-20 text-primary text-center p-2 capitalize hover:(bg-opacity-100 bg-secondary text-white) ">
          View Profile
        </button>

        <button className="rounded-xl font-bold text-primary-light text-center p-1 capitalize hover:(underline) ">
          Copy Referall link
        </button>

        <button className="rounded-xl font-bold py-2 px-8 text-gray-400 capitalize hover:(text-primary bg-secondary) ">
          Logout
        </button>
      </div>
    </aside>
  );
}
