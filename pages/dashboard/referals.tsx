import { useState } from "react";
import TransactionsTable from "../../components/dashboard/TransactionsTable";
import Pagetitle from "../../components/_partials/Pagetitle";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function ReferalsPage() {
  const [currentTransactionsBtn, setCurrentTransactionsBtn] = useState(0);
  const transactionsBtn = ["deposit", "interest", "Investment"];

  return (
    <DashboardLayout alias="referals">
      <section className="p-4 md:p-8">
        <section className="bg-white rounded-3xl p-4 md:(p-8)">
          <Pagetitle>Referred Users</Pagetitle>
          <TransactionsTable />
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

          <TransactionsTable />
        </section>
      </section>
    </DashboardLayout>
  );
}
