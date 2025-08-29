export const checkEmptyYear = (year) => year === '';
export const checkEmptyMonth = (month) => month === '';
export const checkEmptyDay = (day) => day === '';

export const isValidYear = (birthYear) => {
  return Number.isInteger(birthYear) && birthYear >= 0 && birthYear <= 9999;
}
export const isValidMonth = (birthMonth) => {
  return Number.isInteger(birthMonth) && birthMonth >= 1 && birthMonth <= 12;
}
export const isValidDay = (birthDay) => {
  return Number.isInteger(birthDay) && birthDay >= 1 && birthDay <= 31;
}

export const checkPast = (birthYear, birthMonth, birthDay) => {
  const today = new Date();
  const userDate = new Date(birthYear, birthMonth-1, birthDay);
  return userDate <= today;
}

export const isValidDate = (birthYear, birthMonth , birthDay) => {
  const userDate = new Date(birthYear, birthMonth-1, birthDay);
  return (
    userDate.getFullYear() === birthYear &&
    userDate.getMonth() === birthMonth - 1 &&
    userDate.getDate() === birthDay  
  );
}