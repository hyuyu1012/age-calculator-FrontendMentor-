const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // 총 일수

// 대략 연, 월, 일 계산
const resultYear = today.getFullYear() - birthDate.getFullYear() - (today < new Date(today.getFullYear(), birthMonth - 1, birthDay) ? 1 : 0);