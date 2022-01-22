import Head from "next/head";
import NavigationDrawer from "../components/_partials/NavigationDrawer";

export default function DashboardLayout({ children, alias }) {
  return (
    <div className="max-w-screen overflow-hidden">
      <Head>
        <title>Hitevest Financial - {alias}</title>
        <meta name="description" content="Hitevest Financial" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className="flex min-h-screen lg:p-4">
        <NavigationDrawer page={alias} />

        <main className="min-h-full max-w-screen p-4 lg:w-9/12 xl:w-10/12">
          <div className="bg-secondary border-secondary border h-full rounded-3xl w-full overflow-hidden">
            <section className="flex max-w-screen p-2 gap-x-4 justify-between md:(p-4 px-8) ">
              <div>
                <div className="bg-white rounded-full mx-auto h-12 w-12" />
              </div>
              <div className="bg-white rounded-xl flex text-sm w-full px-2 items-center justify-between md:order-first lg:w-10/12">
                <input
                  className="bg-transparent w-full p-2 text-dark-100 md:p-4 focus:outline-none"
                  placeholder="Search for something"
                />
                <div className="bg-primary rounded-xl font-bold text-white py-2 px-8 hidden capitalize md:block">
                  Search
                </div>
              </div>
              <div>
                <div className="bg-white rounded-full mx-auto h-12 w-12" />
              </div>
            </section>

            <section>{children}</section>
          </div>
        </main>
      </section>
    </div>
  );
}
