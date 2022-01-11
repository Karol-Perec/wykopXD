export const calculateAprroximatedAge = (date) => {
  const startDate = new Date(date);
  const now = new Date();

  const ageInSeconds = (now - startDate) / 1000;
  if (!ageInSeconds) {
    return '';
  }

  if (ageInSeconds < 60) return Math.floor(ageInSeconds) + ' sek.';

  const ageInMinutes = ageInSeconds / 60;
  if (ageInMinutes < 60) return Math.floor(ageInMinutes) + ' min.';

  const ageInHours = ageInMinutes / 60;
  if (ageInHours < 24) return Math.floor(ageInHours) + ' godz.';

  const ageInDays = ageInHours / 24;
  if (ageInDays < 7) return Math.floor(ageInDays) + ' dni';

  const ageInWeeks = ageInDays / 7;
  if (ageInWeeks < 5)
    return Math.floor(ageInDays) + (ageInWeeks < 2 ? 'tyg.' : ' tydz.');

  const ageInMonths = ageInDays / 30;
  if (ageInMonths < 12) return Math.floor(ageInMonths) + ' mies.';

  const ageInYears = Math.floor(ageInMonths / 12);
  const monthsRest = ageInMonths - ageInYears * 12;
  return (
    ageInYears + (ageInYears < 2 ? ' rok ' : ' lat ') + monthsRest + ' mies.'
  );
};
