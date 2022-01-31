import Link from "next/link";
import Router from "next/router";

const navLinks = [
  {
    title: "Dashboard",
    alias: "dashboard",
    slug: "/dashboard",
    icon: "/icons/dashboard.svg",
  },
  {
    title: "Investment",
    alias: "investment",
    slug: "/dashboard/investment",
    icon: "/icons/investment.svg",
  },
  {
    title: "Deposits",
    alias: "deposits",
    slug: "/dashboard/deposits",
    icon: "/icons/deposits.svg",
  },
  {
    title: "Withdrawals",
    alias: "withdrawals",
    slug: "/dashboard/withdrawals",
    icon: "/icons/withdrawals.svg",
  },
  {
    title: "Transactions",
    alias: "transactions",
    icon: "/icons/withdrawals.svg",
    slug: "/dashboard/transactions",
  },
  {
    title: "Referals",
    alias: "referals",
    icon: "/icons/referals.svg",
    slug: "/dashboard/referals",
  },
];

export default function NavigationDrawer({ page }: Props) {
  return (
    <>
      <DesktopNavigation page={page} />
      <MobileNavigation page={page} />
    </>
  );
}

export function MobileNavigation({ page }: Props) {
  return (
    <nav className="flex space-x-2 w-full p-2 justify-between lg:(hidden)">
      {navLinks.map((link, i) => (
        <Link key={link.alias} href={`${link.slug}`}>
          <a
            className={`rounded-xl font-bold p-2 text-xs capitalize hover:(text-primary bg-secondary) ${
              page == link.alias ? "text-primary" : "text-true-gray-400 "
            }`}
          >
            <img alt="" src={link.icon} className="mx-auto h-6 w-6" />
            <div className="pt-2">{link.title}</div>
          </a>
        </Link>
      ))}
    </nav>
  );
}

export function DesktopNavigation({ page }: Props) {
  const logout = () => {
    localStorage.removeItem("userData");
    Router.replace("/");
  };

  return (
    <section className="min-h-full p-4 w-64 hidden lg:block">
      <div>
        <img src="/images/logo.svg" alt="logo" />
      </div>

      <section className="pb-8">
        <div className="font-bold text-sm pt-6 pb-4 text-true-gray-400">
          Menu
        </div>
        <div className="flex flex-col space-y-4">
          {navLinks.map((link, i) => (
            <Link key={link.alias} href={`${link.slug}`}>
              <a
                className={`flex space-x-2 items-center  rounded-2xl text-sm font-medium py-2 px-8 capitalize hover:(text-primary bg-secondary) ${
                  page == link.alias
                    ? "bg-primary text-white"
                    : "text-true-gray-400 "
                }`}
              >
                <img alt="" src={link.icon} className="h-6 w-6" />
                <div>{link.title}</div>
              </a>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-lg flex flex-col space-y-4 shadow-lg text-sm p-4">
        <div className="text-center ">
          <div className="rounded-full mx-auto bg-true-gray-300 h-20 w-20" />
          <div className="font-bold text-sm py-4 text-dark-50">
            Sandy Oluwatobi
          </div>
        </div>

        <button className="bg-primary font-bold bg-opacity-20 rounded-2xl text-primary text-center p-3 capitalize hover:(bg-opacity-100 bg-secondary text-white) ">
          View Profile
        </button>

        <button className="rounded-xl font-bold text-primary-light text-center w-full py-2  px-8 capitalize hover:(text-primary bg-secondary) ">
          Copy Referal link
        </button>

        <button
          onClick={logout}
          className="rounded-xl flex font-bold space-x-2 text-center w-full py-2 px-8 text-true-gray-400 justify-center items-center capitalize hover:(text-primary bg-secondary) "
        >
          <img alt="" src="/icons/logout.svg" className="h-4 w-4" />
          <div>Logout</div>
        </button>
      </section>
    </section>
  );
}

interface Props {
  page: string;
}
