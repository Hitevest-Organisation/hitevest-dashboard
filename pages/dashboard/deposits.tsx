import TransactionsTable from "../../components/dashboard/TransactionsTable";
import Pagetitle from "../../components/_partials/Pagetitle";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function DepositsPage() {
  return (
    <DashboardLayout alias="deposits">
      <section className="p-4 pt-0 md:(pt-0 p-8) ">
        <section className="bg-white rounded-3xl p-4 md:(p-8)">
          <Pagetitle>Deposits</Pagetitle>

          <TransactionsTable />
        </section>
      </section>
    </DashboardLayout>
  );
}
