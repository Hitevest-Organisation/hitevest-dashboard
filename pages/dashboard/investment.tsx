import TransactionsTable from "../../components/dashboard/TransactionsTable";
import Pagetitle from "../../components/_partials/Pagetitle";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function InvestmentPage() {
  const plans = [
    {
      title: "Starter Plan",
      returns: 20,
      color: "#eb5757",
      range: [100, 999],
    },
    {
      title: "Enterprise Plan",
      returns: 40,
      color: "red-800",
      range: [1000, 199999],
    },
  ];

  return (
    <DashboardLayout alias="investment">
      <section className="px-4 md:(px-8 flex justify-evenly space-x-8) ">
        {plans.map((plan, i) => (
          <section
            key={i}
            className="bg-white rounded-3xl text-sm mb-4 w-full p-4 text-true-gray-700 md:(w-1/2) "
          >
            <div className="font-bold text-lg pb-4">{plan.title}</div>
            <div className="text-center pb-2">
              {plan.returns}% Returns on Investment
            </div>
            <div className="text-center pb-2">
              Montly payment on Investement
            </div>
            <div className="text-center pb-2">Payments made for 12 months</div>
            <div className="flex text-center pt-2 items-center justify-center">
              <div
                className={`rounded text-white py-1 px-4 ${
                  i ? "bg-sky-400" : "bg-red-600"
                }`}
              >
                Total 240%
              </div>
              <div className="pl-1"> + Capital</div>
            </div>

            <div
              className={`font-bold text-center text-[] text-lg py-4 md:(text-2l) ${
                i ? "text-sky-400" : "text-red-600"
              }`}
            >
              ${plan.range[1].toLocaleString()} - $
              {plan.range[1].toLocaleString()}
            </div>

            <div className="pb-4">
              <div className="bg-white bg-secondary border border-primary rounded-lg flex mx-auto max-w-sm p-1 items-center">
                <div className="px-2">$</div>
                <div className="flex-grow">
                  <input
                    className="bg-transparent w-full p-2 focus:outline-none"
                    placeholder="Enter investment amount"
                    type="number"
                  />
                </div>
              </div>
              {/* <div className="text-xs text-red-700 italic">Enter a valid amount</div> */}
            </div>

            <div className="flex justify-center">
              <button className="bg-primary rounded-xl font-bold text-white p-4 px-8 hidden capitalize md:block hover:(bg-opacity-80) ">
                Invest Now
              </button>
            </div>
          </section>
        ))}
      </section>

      <section className="p-4 pt-0 md:(pt-0 p-8) ">
        <section className="bg-white rounded-3xl p-4 md:(p-8)">
          <Pagetitle>Investments</Pagetitle>

          <TransactionsTable />
        </section>
      </section>
    </DashboardLayout>
  );
}
