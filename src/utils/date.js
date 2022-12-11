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

/**
 * Check datetime is tomorrow
 * @param {string} datetime
 * @return {boolean}
 */
export const checkTomorrow = datetime => {
  const targetDate = new Date(datetime);
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  return targetDate.setHours(0, 0, 0, 0) === tomorrowDate.setHours(0, 0, 0, 0);
};

/**
 * Check datetime is selected date
 * @param {string} targetDatetime
 * @param {string} selectedDatetime
 * @return {boolean}
 */
export const checkSelectedDate = (targetDatetime, selectedDatetime) => {
  const targetDate = new Date(targetDatetime);
  const wantedwDate = new Date(selectedDatetime);
  return targetDate.setHours(0, 0, 0, 0) === wantedwDate.setHours(0, 0, 0, 0);
};
