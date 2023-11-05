export const calcPercent = (goal, consumed) => {
  const res = Math.floor((consumed * 100) / goal);
  return res;
};

export const calcRemainder = (goal, consumed) => {
  const res = goal - consumed;
  return res;
};

export const calcSurplus = (goal, consumed) => {
  const res = 0 - calcRemainder(goal, consumed);
  return res;
};
