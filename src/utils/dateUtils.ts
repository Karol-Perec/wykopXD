export const calculateAprroximatedAge = (date: string) => {
  const ageInSeconds = (Date.now() - Date.parse(date)) / 1000;
  if (ageInSeconds < 60) return `${Math.floor(ageInSeconds)} sek.`;

  const ageInMinutes = ageInSeconds / 60;
  if (ageInMinutes < 60) return `${Math.floor(ageInMinutes)} min.`;

  const ageInHours = ageInMinutes / 60;
  if (ageInHours < 24) return `${Math.floor(ageInHours)} godz.`;

  const ageInDays = ageInHours / 24;
  if (ageInDays < 7) {
    const daysPostfix = ageInDays < 2 ? 'dzień' : 'dni';
    return `${Math.floor(ageInDays)} ${daysPostfix}`;
  }

  const ageInWeeks = ageInDays / 7;
  if (ageInWeeks < 5) {
    const weeksPostfix = ageInWeeks < 2 ? 'tyg.' : 'tydz.';
    return `${Math.floor(ageInWeeks)} ${weeksPostfix}`;
  }

  const ageInMonths = ageInDays / 30;
  if (ageInMonths < 12) return `${Math.floor(ageInMonths)} mies.`;

  const ageInYears = Math.floor(ageInMonths / 12);
  const monthsRest = Math.floor(ageInMonths - ageInYears * 12);
  const yearPostfix = ageInYears < 2 ? 'rok' : 'lat';

  return `${ageInYears} ${yearPostfix} ${monthsRest} mies.`;
};
