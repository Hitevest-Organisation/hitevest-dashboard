import TransactionsTable from "../../components/dashboard/TransactionsTable";
import Pagetitle from "../../components/_partials/Pagetitle";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function WithdrawalsPage() {
  return (
    <DashboardLayout alias="withdrawals">
      <section className="px-4 md:(px-8 flex justify-evenly space-x-8) ">
        {["Bitcoin", "Bank Account"].map((withdrawalType, i) => (
          <section className="bg-white rounded-3xl text-center text-sm mb-4 w-full p-4 text-true-gray-700 md:(p-8 w-1/2) ">
            <div className="rounded-full mx-auto bg-true-gray-300 h-20 w-20" />

            <div className="font-bold pt-4 pb-2">
              Make a withdrawal to {withdrawalType}
            </div>
            <div className="pb-2">Limit: 1 to 1000000 USD</div>
            <div className="pb-6">Charge: 0 USD + 0%</div>
            <div className="flex justify-center">
              <button className="bg-primary rounded-xl font-bold text-white py-2 px-8 hidden capitalize md:block">
                Withdraw
              </button>
            </div>
          </section>
        ))}
      </section>

      <section className="p-4 pt-0 md:(pt-0 p-8) ">
        <section className="bg-white rounded-3xl p-4 md:(p-8)">
          <div className="flex space-x-4">
            <Pagetitle>Withdraw</Pagetitle>
          </div>

          <TransactionsTable />
        </section>
      </section>
    </DashboardLayout>
  );
}
