/* eslint-disable implicit-arrow-linebreak */
import { useCallback, useState } from 'react';

const useDate = () => {
  const [today] = useState(new Date());

  const isToday = useCallback(
    (day: number, month: number, year: number) =>
      today.getDate() === day && month === today.getMonth() + 1 && today.getFullYear() === year,
    [today],
  );

  return {
    today,
    isToday,
  };
};

export default useDate;
