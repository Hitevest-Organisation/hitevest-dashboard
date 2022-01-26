import TransactionsTable from "../../components/dashboard/TransactionsTable";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function TransactionsPage() {
  return (
    <DashboardLayout alias="transactions">
      <section className="p-4 md:p-8">
        <section className="bg-white rounded-3xl p-4 md:(p-8)">
          <div className="flex space-x-4">
            <button className="bg-primary rounded-xl font-bold bg-opacity-20 text-primary text-sm text-center p-2 px-4 capitalize md:px-8 hover:(bg-opacity-100 bg-secondary text-white) ">
              Deposit
            </button>

            <button className="rounded-xl font-bold text-sm py-2 px-4 text-true-gray-400 capitalize md:px-8 hover:(text-primary bg-secondary) ">
              Interest
            </button>
          </div>

          <TransactionsTable />
        </section>
      </section>
    </DashboardLayout>
  );
}
