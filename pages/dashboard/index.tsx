import DashboardLayout from "../../layouts/DashboardLayout";
import { transactions } from "../../assets/DummyTransactions";

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
            <div className="font-bold p-4 pb-0 text-true-gray-700">{item}</div>
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

      <section className="p-4 md:p-8 lg:p-20">
        <section className="bg-white rounded-3xl p-4">
          <div className="flex space-x-4">
            <button className="bg-primary rounded-xl font-bold bg-opacity-20 text-primary text-sm text-center p-2 px-4 capitalize md:px-8 hover:(bg-opacity-100 bg-secondary text-white) ">
              Deposit
            </button>

            {["Witdrawal", "Interest"].map((item, i) => (
              <button
                key={i}
                className="rounded-xl font-bold text-sm py-2 px-4 text-true-gray-400 capitalize md:px-8 hover:(text-primary bg-secondary) "
              >
                {item}
              </button>
            ))}
          </div>

          <div className="py-4 overflow-x-auto">
            <section className="rounded w-full table table-auto">
              <div className="table-header-group">
                <div className="font-medium text-sm text-true-gray-600 uppercase table-row">
                  <div className="font-bold text-left p-2 py-4 table-cell">
                    Date
                  </div>
                  <div className="font-bold text-left p-2 table-cell">
                    <div className="inline md:hidden">Trans ID</div>
                    <div className="hidden md:inline">Transaction ID</div>
                  </div>
                  <div className="font-bold text-left p-2 table-cell">
                    Amount
                  </div>
                  <div className="font-bold text-left p-2 table-cell">
                    Wallet Ballance
                  </div>
                  <div className="font-bold text-left p-2 table-cell">
                    Remark
                  </div>
                </div>
              </div>

              {transactions.map((transaction, i) => (
                <div key={i} className="text-true-gray-600 table-row-group">
                  <div className="text-sm table-row">
                    <div className="text-xs p-2 table-cell md:(py-4) ">
                      {transaction.date}
                    </div>
                    <div className="p-2 table-cell">{transaction.id}</div>
                    <div className="p-2 table-cell">
                      $ {transaction.amount.toLocaleString()}
                    </div>
                    <div className="p-2 table-cell">
                      $ {transaction.balance.toLocaleString()}
                    </div>
                    <div className="p-2 table-cell whitespace-nowrap">
                      {transaction.remark}
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <nav className="flex pt-4 justify-end">
              <button className="bg-primary rounded-xl font-bold bg-opacity-20 text-primary text-sm text-center p-2 px-4 capitalize md:px-8 hover:(bg-opacity-100 bg-secondary text-white) ">
                Veiw All →
              </button>
            </nav>
          </div>
        </section>
      </section>
    </DashboardLayout>
  );
}
