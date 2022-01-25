import Link from "next/link";

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
    <nav className="flex space-x-2 w-full p-4 lg:(hidden)">
      {navLinks.map((link, i) => (
        <Link key={link.alias} href={`/${link.slug}`}>
          <a
            className={`rounded-xl font-bold p-2 text-xs capitalize hover:(text-primary bg-secondary) ${
              page == link.alias ? "bg-primary text-white" : "text-gray-400 "
            }`}
          >
            {link.title}
          </a>
        </Link>
      ))}
    </nav>
  );
}

export function DesktopNavigation({ page }: Props) {
  return (
    <section className="min-h-full p-4 w-64 hidden lg:block">
      <div>
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="pb-8">
        <div className="font-bold text-lg py-6 text-gray-400">Menu</div>
        <div className="flex flex-col space-y-4">
          {navLinks.map((link, i) => (
            <Link key={link.alias} href={`/${link.slug}`}>
              <a
                className={`rounded-xl font-bold py-2 px-8 capitalize hover:(text-primary bg-secondary) ${
                  page == link.alias
                    ? "bg-primary text-white"
                    : "text-gray-400 "
                }`}
              >
                {link.title}
              </a>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-lg flex flex-col space-y-4 shadow-lg p-4">
        <div className="text-center ">
          <div className="rounded-full mx-auto bg-gray-300 h-20 w-20" />
          <div className="font-bold text-sm py-4 text-dark-50">
            Sandy Oluwatobi
          </div>
        </div>

        <button className="bg-primary rounded-xl font-bold bg-opacity-20 text-primary text-center p-2 capitalize hover:(bg-opacity-100 bg-secondary text-white) ">
          View Profile
        </button>

        <button className="rounded-xl font-bold text-primary-light text-center p-1 capitalize hover:(underline) ">
          Copy Referal link
        </button>

        <Link href="/">
          <a className="rounded-xl font-bold text-center w-full py-2 px-8 text-gray-400 capitalize hover:(text-primary bg-secondary) ">
            Logout
          </a>
        </Link>
      </div>
    </section>
  );
}

interface Props {
  page: string;
}
