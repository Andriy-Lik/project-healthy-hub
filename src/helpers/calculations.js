export const calcPercent = (goal, consumed) => {
  const res = Math.floor((consumed * 100) / goal);
  if (res > 100) return 100;

  return res;
};

export const calcRemainder = (goal, consumed) => {
  const res = goal - consumed;
  if (res < 0) return 0;
  return res;
};
