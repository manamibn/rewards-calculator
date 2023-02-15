import React, { useState, useEffect } from "react";
import { Customer } from "./components";
import { calculateRewards, calculateLastThreeMonths, fetch } from "./utils";

const App = () => {
  const [customers, setCustomers] = useState([]);
  const currentMonth = new Date().getMonth();
  const lastMonthYear = calculateLastThreeMonths(currentMonth, 1);
  const secondLastMonthYear = calculateLastThreeMonths(currentMonth, 2);
  const thirdLastMonthYear = calculateLastThreeMonths(currentMonth, 3);

  const calculateMonthlyRewards = (customers) => {
    customers.forEach((customer) => {
      let monthlyTransactions = {};
      let totalReawards = 0;
      customer.transactions.forEach((transaction) => {
        const transactionMonth = new Date(transaction.date).getMonth();
        const transactionYear = new Date(transaction.date).getFullYear();
        if (
          (transactionMonth === lastMonthYear[0] &&
            transactionYear === lastMonthYear[1]) ||
          (transactionMonth === secondLastMonthYear[0] &&
            transactionYear === secondLastMonthYear[1]) ||
          (transactionMonth === thirdLastMonthYear[0] &&
            transactionYear === thirdLastMonthYear[1])
        ) {
          const transactionRewards = calculateRewards(
            Math.trunc(transaction.amount_spent)
          );
          transaction.rewards = transactionRewards;
          totalReawards += transactionRewards;

          if (monthlyTransactions[" " + transactionMonth]) {
            monthlyTransactions[" " + transactionMonth]["transactions"].push(
              transaction
            );
            monthlyTransactions[" " + transactionMonth]["monthlyReawards"] +=
              transactionRewards;
          } else {
            monthlyTransactions[" " + transactionMonth] = {
              transactions: [transaction],
              monthlyReawards: transactionRewards,
            };
          }
        }
      });
      customer.transactions = monthlyTransactions;
      customer.totalReawards = totalReawards;
    });
    setCustomers(customers);
  };

  const fetchData = async () => {
    fetch().then((customers) => {
      calculateMonthlyRewards(customers);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="page-header">
        <h1>
          <span>Rewards Calculation</span>
          <h4>
            {" "}
            Showing for the transactions occured in the last 3 months (Nov, 2022
            - Jan, 2023)
          </h4>
        </h1>
      </div>
      {customers.map((customer) => (
        <Customer customer={customer} key={customer.id} />
      ))}
    </div>
  );
};

export default App;
