export const Transactions = ({ transactions }) => {
  return (
    <table className="table table-striped">
      <thead>
        <th>Date</th>
        <th>Amount Spent</th>
        <th>Rewards Earned</th>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.date}>
            <td>{transaction.date}</td>
            <td>${transaction.amount_spent}</td>
            <td>{transaction.rewards ? `${transaction.rewards}` : "0"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
