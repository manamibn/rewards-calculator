import { TransactionsByMonth } from "./TransactionsByMonth";

export const Customer = ({ customer }) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <span
          className="glyphicon glyphicon-user"
          aria-hidden="true"
          style={{ marginRight: 10 }}
        />
        <span style={{ fontWeight: "bold", marginRight: 40 }}>
          {customer.name}
        </span>
        <span style={{ fontWeight: "bold" }}>
          Total point earned in the last 3 months: {customer.totalReawards}
        </span>
      </div>
      <div className="panel-body">
        {Object.keys(customer.transactions).map((month) => {
          const monthlyTransactions = customer.transactions[month];
          return (
            <TransactionsByMonth
              key={`${customer.id}+${month}`}
              month={month}
              monthlyTransactions={monthlyTransactions}
            />
          );
        })}
      </div>
    </div>
  );
};
