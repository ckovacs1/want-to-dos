/**
 * Check datetime is today
 * @param {string} datetime
 * @return {boolean}
 */
export const checkToday = datetime => {
  const targetDate = new Date(datetime);
  const todayDate = new Date();
  return targetDate.setHours(0, 0, 0, 0) === todayDate.setHours(0, 0, 0, 0);
};
