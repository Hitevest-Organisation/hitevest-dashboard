import TransactionsTable from "../../components/dashboard/TransactionsTable";
import Pagetitle from "../../components/_partials/Pagetitle";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function InvestmentPage() {
  return (
    <DashboardLayout alias="investment">
      <section className="p-4 pt-0 md:(pt-0 p-8) ">
        <section className="bg-white rounded-3xl p-4 md:(p-8)">
          <Pagetitle>Investments</Pagetitle>

          <TransactionsTable />
        </section>
      </section>
    </DashboardLayout>
  );
}
