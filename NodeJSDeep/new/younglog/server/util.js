export const StringToDate = (str) => {
  return Date.parse(str);
}

export const DateToString = (date) => {
  return date.toLocaleDateString('ko-KR', { timeZone: 'UTC' });
}
