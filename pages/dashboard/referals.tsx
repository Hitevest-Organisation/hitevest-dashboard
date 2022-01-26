import { useState } from "react";
import TransactionsTable from "../../components/dashboard/TransactionsTable";
import Pagetitle from "../../components/_partials/Pagetitle";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function ReferalsPage() {
  const [currentTransactionsBtn, setCurrentTransactionsBtn] = useState(0);
  const transactionsBtn = ["deposit", "interest", "Investment"];

  const referrees = [
    {
      name: "Lolade Adebayo",
      date: "1/2/2022",
      userType: "Starter",
    },
    ,
    {
      name: "Oguneko Damilola",
      date: "3/2/2022",
      userType: "Enterprise",
    },
    ,
    {
      name: "Olajide Zainab",
      date: "14/2/2022",
      userType: "Starter",
    },
  ];

  const transactions = [
    {
      id: "#abc",
      date: "1/2/2022",
      from: "Shade",
      type: "-",
      commission: {
        amount: 110,
        percent: 10,
      },
    },
    {
      id: "#qwerty",
      date: "1/2/2022",
      from: "Bayo",
      type: "-",
      commission: {
        amount: 3330,
        percent: 10,
      },
    },
    {
      id: "#xyz",
      date: "1/2/2022",
      from: "cc",
      type: "-",
      commission: {
        amount: 40,
        percent: 45200,
      },
    },
  ];

  return (
    <DashboardLayout alias="referals">
      <section className="p-4 md:p-8">
        <section className="bg-white rounded-3xl p-4 md:(p-8)">
          <Pagetitle>Referred Users</Pagetitle>
          <section className="py-4 overflow-x-auto">
            <div className="rounded w-full table table-auto">
              <div className="table-header-group">
                <div className="font-medium text-sm text-true-gray-600 uppercase table-row">
                  <div className="font-bold text-left p-2 py-4 table-cell">
                    Date
                  </div>
                  <div className="font-bold text-left p-2 table-cell">
                    Full Name
                  </div>
                </div>
              </div>

              {referrees.map((referree, i) => (
                <div key={i} className="text-true-gray-600 table-row-group">
                  <div className="text-sm table-row">
                    <div className="p-2 table-cell whitespace-nowrap">
                      {referree?.date}
                    </div>
                    <div className="p-2 table-cell whitespace-nowrap">
                      {referree?.name}
                    </div>
                    <div className="p-2 table-cell whitespace-nowrap">
                      {referree?.userType}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </section>

      <section className="p-4 pt-0 md:(pt-0 p-8) ">
        <section className="bg-white rounded-3xl p-4 md:(p-8)">
          <div className="flex space-x-4">
            <Pagetitle>Referral Commissions</Pagetitle>
            {transactionsBtn.map((btn, i) => (
              <button
                key={i}
                onClick={() => setCurrentTransactionsBtn(i)}
                className={`rounded-xl font-bold text-sm py-2 px-4 capitalize md:px-8  ${
                  i == currentTransactionsBtn
                    ? "bg-primary bg-opacity-20 text-primary"
                    : "hover:(text-primary bg-secondary) text-true-gray-400"
                } `}
              >
                {btn}
              </button>
            ))}
          </div>

          <section className="py-4 overflow-x-auto">
            <div className="rounded w-full table table-auto">
              <div className="table-header-group">
                <div className="font-medium text-sm text-true-gray-600 uppercase table-row">
                  <div className="font-bold text-left p-2 py-4 table-cell">
                    Date
                  </div>
                  <div className="font-bold text-left p-2 table-cell">From</div>

                  <div className="font-bold text-left p-2 table-cell">
                    commission %
                  </div>
                  <div className="font-bold text-left p-2 table-cell">
                    Amount ($)
                  </div>
                  <div className="font-bold text-left p-2 table-cell">Type</div>
                </div>
              </div>

              {transactions.map((referree, i) => (
                <div key={i} className="text-true-gray-600 table-row-group">
                  <div className="text-sm table-row">
                    <div className="p-2 table-cell whitespace-nowrap">
                      {referree?.date}
                    </div>
                    <div className="p-2 table-cell whitespace-nowrap">
                      {referree?.from}
                    </div>
                    <div className="p-2 table-cell whitespace-nowrap">
                      {referree?.commission?.percent}
                    </div>
                    <div className="p-2 table-cell whitespace-nowrap">
                      {referree?.commission?.amount.toLocaleString()}
                    </div>
                    <div className="p-2 table-cell whitespace-nowrap">
                      {referree?.type}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </section>
    </DashboardLayout>
  );
}
