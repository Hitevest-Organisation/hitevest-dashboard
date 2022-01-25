import DashboardLayout from "../../layouts/DashboardLayout";

export default function DashboardHome() {
  const cards = [
    "Deposit Wallet",
    "Local Wallet",
    "Total Investment",
    "Total Deposit",
    "Total Witdrawal",
    "Referal Earnings",
  ];

  return (
    <DashboardLayout alias="dashboard">
      <section className="flex max-w-screen space-x-4 p-2 overflow-x-auto md:(p-4 px-8) ">
        {cards.map((item, i) => (
          <div
            className="bg-white rounded-lg flex-grow min-w-48 transform duration-300 hover:scale-105"
            key={i}
          >
            <div className="font-bold p-4 pb-0 text-gray-700">{item}</div>
            <div className="flex space-x-4 p-4 pt-1 pb-2 items-center">
              <div className="flex-grow font-medium font-bold text-xl text-[#f2a218]">
                $ 600k
              </div>
              <div className="rounded flex font-medium space-x-2 bg-[#219653] bg-opacity-40 text-xs py-0.5 px-1 text-[#219653] items-center">
                <img src="/icons/up.svg" alt="search" className="h-3 w-3" />
                <div>2.5%</div>
              </div>
            </div>

            <div
              className="bg-no-repeat bg-cover bg-top h-20 md:h-24"
              style={{
                backgroundImage: "url(/images/dashboard/graphs/001.svg)",
              }}
            />
          </div>
        ))}
      </section>

      <section className="p-4 md:p-8">
        <section className="bg-white rounded-2xl p-4">
          <div className="flex space-x-4">
            <button className="bg-primary rounded-xl font-bold bg-opacity-20 text-primary text-sm text-center p-2 px-4 capitalize md:px-8 hover:(bg-opacity-100 bg-secondary text-white) ">
              Deposit
            </button>

            {["Witdrawal", "Interest"].map((item, i) => (
              <button
                key={i}
                className="rounded-xl font-bold text-sm py-2 px-4 text-gray-400 capitalize md:px-8 hover:(text-primary bg-secondary) "
              >
                {item}
              </button>
            ))}
          </div>

          <div className="py-8">fghfjhgjhk</div>
        </section>
      </section>
    </DashboardLayout>
  );
}
