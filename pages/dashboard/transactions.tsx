import { useState } from "react";
import TransactionsTable from "../../components/dashboard/TransactionsTable";
import Pagetitle from "../../components/_partials/Pagetitle";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function TransactionsPage() {
  const [currentTransactionsBtn, setCurrentTransactionsBtn] = useState(0);
  const transactionsBtn = ["deposit", "interest"];

  return (
    <DashboardLayout alias="transactions">
      <section className="p-4 pt-0 md:(p-8 pt-0) ">
        <section className="bg-white rounded-3xl p-4 md:(p-8)">
          <div className="flex space-x-4">
            <Pagetitle>Transactions</Pagetitle>

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
