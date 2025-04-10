export const randomDate = (pastDays = 90) => {
  const now = new Date();
  const past = new Date(now);
  past.setDate(past.getDate() - pastDays);

  const randomTime =
    past.getTime() + Math.random() * (now.getTime() - past.getTime());
  return new Date(randomTime).toISOString();
};
