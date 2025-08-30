import {
  checkEmptyYear,
  checkEmptyMonth,
  checkEmptyDay,
  isValidYear,
  isValidMonth,
  isValidDay,
  checkPast,
  isValidDate,
} from "./error.js";

const submitBtn = document.querySelector(".submit-button");
const spanYear = document.querySelector(".span__year");
const spanMonth = document.querySelector(".span__month");
const spanDay = document.querySelector(".span__day");

const dayError = document.querySelector(".day__error");
const monthError = document.querySelector(".month__error");
const yearError = document.querySelector(".year__error");

const updateLiveTime = (birthYear, birthMonth, birthDay) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // JS 월은 0~11
  const currentDay = today.getDate();

  let resultYear, resultMonth, resultDay;
  if (currentMonth > birthMonth || (currentMonth === birthMonth && currentDay >= birthDay)) {
    resultYear = currentYear - birthYear;
  } else {
    resultYear = currentYear - birthYear - 1;
  }
  // 월 계산
  if (currentDay >= birthDay) {
    resultMonth = currentMonth - birthMonth;
  } else {
    resultMonth = currentMonth - birthMonth - 1;
  }
  if (resultMonth < 0) resultMonth += 12;

  // 일 계산
  if (currentDay >= birthDay) {
    resultDay = currentDay - birthDay;
  } else {
    // 이전 달 일수 가져오기
    const prevMonth = new Date(currentYear, currentMonth - 1 - 1, 0); // 이전 달
    resultDay = currentDay + prevMonth.getDate() - birthDay;
  }
  spanYear.textContent = resultYear;
  spanMonth.textContent = resultMonth;
  spanDay.textContent = resultDay;
} 

submitBtn.addEventListener("click", () => {
  const birthYear = (document.querySelector("#input__year").value);
  const birthMonth = (document.querySelector("#input__month").value);
  const birthDay = (document.querySelector("#input__day").value);
  
  let emptyFlag = false;
  let validFlag = false;

  if(checkEmptyYear(birthYear)) {
    yearError.textContent = "This field is required";
    emptyFlag = true;
  }
  if(checkEmptyMonth(birthMonth)) {
    monthError.textContent= "This field is required";
    emptyFlag = true;
  }
  if(checkEmptyDay(birthDay)) {
    dayError.textContent= "This field is required";
    emptyFlag = true;
  }
  if(emptyFlag) {
    return;
  }

  if(!isValidYear(Number(birthYear))) {
    yearError.textContent = "Must be a valid Year";
    validFlag = true;
  }
  if(!isValidMonth(Number(birthMonth))) {
    monthError.textContent = "Must be a valid Month";
    validFlag = true;
  }
  if(!isValidDay(Number(birthDay))) {
    dayError.textContent = "Must be a valid Day";
    validFlag = true;
  }
  if(validFlag){
    return;
  }
  if(!checkPast(Number(birthYear), Number(birthMonth), Number(birthDay))) {
    yearError.textContent = "Must be in the past";
    return;
  }
  if(!isValidDate(Number(birthYear), Number(birthMonth), Number(birthDay))) {
    dayError.textContent = "Must be a valid date";
    return;
  }
  updateLiveTime(Number(birthYear), Number(birthMonth), Number(birthDay));
})
