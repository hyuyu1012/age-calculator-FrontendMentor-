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

// js의 style property는 해당 요소의 inline css를 의미한다.
 
const submitBtn = document.querySelector(".submit-button");
const spanYear = document.querySelector(".span__year");
const spanMonth = document.querySelector(".span__month");
const spanDay = document.querySelector(".span__day");

const dayError = document.querySelector(".day__error");
const monthError = document.querySelector(".month__error");
const yearError = document.querySelector(".year__error");

const yearInput = document.querySelector("#input__year");
const monthInput = document.querySelector("#input__month");
const dayInput = document.querySelector("#input__day");

const yearLabel = document.querySelector('#label__year');
const monthLabel = document.querySelector('#label__month');
const dayLabel = document.querySelector('#label__day');

const root = document.documentElement;
const primaryRed = getComputedStyle(root).getPropertyValue('--primary-red').trim();
const grey200 = getComputedStyle(root).getPropertyValue('--Grey-200').trim();
const grey500 = getComputedStyle(root).getPropertyValue('--Grey-500').trim();

// label : 500
// input : 200

function resetInput() {
  dayError.textContent = "";
  monthError.textContent = "";
  yearError.textContent = "";

  yearLabel.style.color = grey500;
  monthLabel.style.color = grey500;
  dayLabel.style.color = grey500;      

  yearInput.style.borderColor = grey200;
  monthInput.style.borderColor = grey200;
  dayInput.style.borderColor = grey200;

}


const updateLiveTime = (birthYear, birthMonth, birthDay) => {
  resetInput();
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
  const birthYear = (yearInput.value);
  const birthMonth = (monthInput.value);
  const birthDay = (dayInput.value);

  let emptyFlag = false;
  let validFlag = false;

  if(checkEmptyYear(birthYear)) {
    yearError.textContent = "This field is required";
    yearInput.style.borderColor = primaryRed;
    yearLabel.style.color = primaryRed;
    emptyFlag = true;
  }
  if(checkEmptyMonth(birthMonth)) {
    monthError.textContent= "This field is required";
    monthInput.style.borderColor = primaryRed;
    monthLabel.style.color = primaryRed;
    emptyFlag = true;
  }
  if(checkEmptyDay(birthDay)) {
    dayError.textContent= "This field is required";
    dayInput.style.borderColor = primaryRed;
    dayLabel.style.color = primaryRed;
    emptyFlag = true;
  }
  if(emptyFlag) {
    return;
  }

  if(!isValidYear(Number(birthYear))) {
    yearError.textContent = "Must be a valid Year";
    yearInput.style.borderColor = primaryRed;
    yearLabel.style.color = primaryRed
    validFlag = true;
  }
  if(!isValidMonth(Number(birthMonth))) {
    monthError.textContent = "Must be a valid Month";
    monthInput.style.borderColor = primaryRed;
    monthLabel.style.color = primaryRed    
    validFlag = true;
  }
  if(!isValidDay(Number(birthDay))) {
    dayError.textContent = "Must be a valid Day";
    dayInput.style.borderColor = primaryRed;
    dayLabel.style.color = primaryRed    
    validFlag = true;
  }
  if(validFlag){
    return;
  }
  if(!checkPast(Number(birthYear), Number(birthMonth), Number(birthDay))) {
    yearError.textContent = "Must be in the past";
    yearInput.style.borderColor = primaryRed;
    yearLabel.style.color = primaryRed    
    return;
  }
  if(!isValidDate(Number(birthYear), Number(birthMonth), Number(birthDay))) {
    dayError.textContent = "Must be a valid date";
    dayInput.style.borderColor = primaryRed;
    yearLabel.style.color = primaryRed;    
    monthLabel.style.color = primaryRed;    
    dayLabel.style.color = primaryRed;    
    
    return;
  }
  updateLiveTime(Number(birthYear), Number(birthMonth), Number(birthDay));
})
