export const transactions: Transactions[] = [
  {
    date: "1/2/2022",
    id: "#565542554",
    amount: 5234,
    balance: 123456,
    remark: "This was deposited into your wallet",
  },
  {
    date: "2/2/2022",
    id: "#565542554",
    amount: 5234,
    balance: 231525,
    remark: "This was deposited into your wallet",
  },
  {
    date: "1/12/2022",
    id: "#565542554",
    amount: 5034,
    balance: 234525,
    remark: "This was deposited into your wallet",
  },
];

interface Transactions {
  id: String;
  date: String;
  amount: number;
  balance: number;
  remark: string;
}
