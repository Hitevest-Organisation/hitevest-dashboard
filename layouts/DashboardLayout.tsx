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

      <section className="flex flex-col h-screen justify-between lg:(min-h-screen flex-row flex-row-reverse) lg:p-2 ">
        <main className="flex-grow max-w-screen overflow-y-auto md:(p-4) lg:(min-h-full w-9/12) xl:w-10/12 ">
          <div className="bg-secondary min-h-full w-full pb-20 md:(rounded-4xl pb-0) ">
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
