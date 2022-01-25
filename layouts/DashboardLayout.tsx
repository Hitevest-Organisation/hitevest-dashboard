import Head from "next/head";
import NavigationDrawer from "../components/_partials/NavigationDrawer";
import TopNavigationBar from "../components/_partials/TopNavigationBar";

export default function DashboardLayout({ children, alias }: Props) {
  return (
    <div className="max-w-screen overflow-hidden">
      <Head>
        <title>Hitevest Financial - {alias}</title>
        <meta name="description" content="Hitevest Financial" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className="flex flex-col h-screen justify-between lg:(min-h-screen flex-row flex-row-reverse) lg:p-4 ">
        <main className="max-w-screen p-4 lg:(min-h-full w-9/12) xl:w-10/12 ">
          <div className="bg-secondary border-secondary border h-full rounded-3xl w-full overflow-hidden">
            <TopNavigationBar />
            <section>{children}</section>
          </div>
        </main>

        <NavigationDrawer page={alias} />
      </section>
    </div>
  );
}

interface Props {
  children: any;
  alias: string;
}
