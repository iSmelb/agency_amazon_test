export const dateFormating = (date: Date | number | string) => {
  const locale = navigator.language;
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "2-digit",
  };

  const UserDate = new Intl.DateTimeFormat(locale, dateOptions);

  return UserDate.format(date);
};
