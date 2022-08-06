/* eslint-disable implicit-arrow-linebreak */
import { useCallback, useState } from 'react';

import { converDateToNumber } from '@/utils/date';

const useDate = () => {
  const [today] = useState(new Date());

  const isToday = useCallback(
    (day: number, month: number, year: number) => {
      const todayDate = converDateToNumber(today);
      return todayDate.day === day && month === todayDate.month && todayDate.year === year;
    },
    [today],
  );

  return {
    today,
    isToday,
  };
};

export default useDate;
