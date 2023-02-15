import { Transactions } from "./Transactions";
import { calculateMonthMap } from "../utils";

export const TransactionsByMonth = ({ month, monthlyTransactions }) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <span style={{ fontWeight: "bold", marginRight: 600 }}>
          Month: {calculateMonthMap(Number(month))}
        </span>
        <span style={{ fontWeight: "bold" }}>
          Total point earned: {monthlyTransactions.monthlyReawards}
        </span>
      </div>
      <div className="panel-body">
        <Transactions transactions={monthlyTransactions.transactions} />
      </div>
    </div>
  );
};
