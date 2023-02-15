const months = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

export const calculateLastThreeMonths = (currentMonth, i) => {
  let currentDate = new Date();
  currentDate.setMonth(currentMonth - i);
  return [currentDate.getMonth(), currentDate.getFullYear()];
};

export const calculateMonthMap = (dateCheck) => {
  if (months.hasOwnProperty(dateCheck)) {
    return months[dateCheck];
  }
};

export const calculateRewards = (amountSpent) => {
  let rewards = 0;
  if (amountSpent > 100) {
    rewards += 2 * (amountSpent - 100);
  }
  if (amountSpent > 50) {
    rewards += 1 * Math.min(amountSpent - 50, 100 - 50);
  }
  return rewards;
};
