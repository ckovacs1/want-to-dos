/**
 * Check datetime is today
 * @param {string} datetime
 * @return {boolean}
 */
export const checkToday = datetime => {
  const targetDate = convertNewyorkTZ(new Date(datetime));
  const todayDate = convertNewyorkTZ(new Date());
  return targetDate.setHours(0, 0, 0, 0) === todayDate.setHours(0, 0, 0, 0);
};

/**
 * Check datetime is tomorrow
 * @param {string} datetime
 * @return {boolean}
 */
export const checkTomorrow = datetime => {
  const targetDate = convertNewyorkTZ(new Date(datetime));
  const tomorrowDate = convertNewyorkTZ(new Date());
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
  const targetDate = convertNewyorkTZ(new Date(targetDatetime));
  const wantedwDate = convertNewyorkTZ(new Date(selectedDatetime));
  return targetDate.setHours(0, 0, 0, 0) === wantedwDate.setHours(0, 0, 0, 0);
};

const convertNewyorkTZ = date => convertTZ(date, 'America/New_York');

const convertTZ = (date, tzString) => {
  return new Date(
    (typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', {
      timeZone: tzString,
    }),
  );
};
