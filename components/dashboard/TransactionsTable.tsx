import { transactions } from "../../assets/DummyTransactions";

export default function TransactionsTable({ limit }: Props) {
  const Transactions = !!limit ? transactions.slice(0, limit) : transactions;

  return (
    <section className="py-4 overflow-x-auto">
      <div className="rounded w-full table table-auto">
        <div className="table-header-group">
          <div className="font-medium text-sm text-true-gray-600 uppercase table-row">
            <div className="font-bold text-left p-2 py-4 table-cell">Date</div>
            <div className="font-bold text-left p-2 table-cell">
              <div className="inline md:hidden">Trans ID</div>
              <div className="hidden md:inline">Transaction ID</div>
            </div>
            <div className="font-bold text-left p-2 table-cell">Amount</div>
            <div className="font-bold text-left p-2 table-cell">
              Wallet Ballance
            </div>
            <div className="font-bold text-left p-2 table-cell">Remark</div>
          </div>
        </div>

        {Transactions.slice(0, limit).map((transaction, i) => (
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
      </div>

      <nav className="flex pt-4 justify-end">
        <button className="bg-primary rounded-xl font-bold bg-opacity-20 text-primary text-sm text-center p-2 px-4 capitalize md:px-8 hover:(bg-opacity-100 bg-secondary text-white) ">
          Veiw All →
        </button>
      </nav>
    </section>
  );
}

interface Props {
  limit?: number;
}
