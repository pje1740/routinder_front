import { NumberDate } from '@/@types/calendar';
/* eslint-disable no-plusplus */

export const converDateToNumber = (date: Date): NumberDate => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return {
    year,
    month,
    day,
  };
};

/**
 * Represents a book.
 * @param {number} year - The year.
 * @param {number} month - The month (not indexed, actual month)
 */

export const getMonthInfo = (year: number, month: number) => {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);
  const lastMonthEndDate = new Date(year, month - 1, 0).getDate();
  const firstDay = startDate.getDay();
  const endDay = endDate.getDay();

  // 달력에 나와야하는 지난달 일수들
  const lastMonthDays = [];
  for (let i = firstDay; i > 0; i--) {
    lastMonthDays.push(lastMonthEndDate - (i - 1));
  }

  // 달력에 나와야하는 다음달 일수들
  const nextMonthDays = [];
  for (let i = 1; i < 7 - endDay; i++) {
    nextMonthDays.push(i);
  }

  const daysInMonth = endDate.getDate();
  const totalDays = firstDay + daysInMonth;
  const rowsNum = Math.ceil(totalDays / 7);

  return {
    rowsNum,
    totalDays: Array.from(Array(endDate.getDate())).map((v, i) => i + 1),
    lastMonthDays,
    nextMonthDays,
  };
};

export const convertDateToString = (date: Date) => {
  const { year, month, day } = converDateToNumber(date);
  const timeSection = date.toLocaleTimeString().split(' ')[1];
  return `${year}-${month}-${day} ${timeSection}`;
};
