const checkEmpty = (birthYear, birthMonth, birthDay) => {
  let isNotEmpty = true;
  if(birthYear === '') {
    isEmpty = false;
  }
  if(birthMonth === '') {
    isEmpty = false;
  }
  if(birthDay === '') {
    isEmpty = false;
  }
  return isNotEmpty;
}

const isValidYear = (birthYear) => {
  if(birthYear >= 0) {
    return true;
  }
  else {
    return false;
  }
} 

const isValidMonth = (birthMonth) => {
  if(birthMonth >= 1 && birthMonth <= 12) {
    return true;
  }
  else {
    return false;
  }
}

const isValidDay = (birthDay) => {
  if(birthDay >= 1 && birthDay <= 31) {
    return true;
  }
  else {
    return false;
  }
}

const isValidDate = (birthYear, birthMonth , birthDay) => {
  const userDate = new Date(birthYear, birthMonth-1, birthDay);
  return (
    userDate.getFullYear() === year &&
    userDate.getMonth() === month - 1 &&
    userDate.getDate() === day  
  )
}

const checkPast = (birthYear, birthMonth, birthDay) => {
  let isPast = true;
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  if(birthYear > currentYear) {
    isPast = false;
  }
  if((birthYear === currentYear) && (birthMonth > currentMonth)) {
    isPast = false;
  }
  if((birthYear === currentYear) && (birthMonth === currentMonth) && (birthDay > currentDay)) {
    isPast = false;
  }

  if(!isValid) {
    yearError.textContent = "Must be in the past";
  }
  return isPast;
}
