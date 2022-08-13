import { NextPage } from 'next';

import MonthlyCalendar from '@/components/organisms/MonthlyCalendar';
import useDate from '@/hooks/useDate';
import { converDateToNumber } from '@/utils/date';

const HomePage: NextPage = () => {
  const { today } = useDate();
  const { year, month } = converDateToNumber(today);

  return (
    <>
      <MonthlyCalendar year={year} month={month} days={[]} />
    </>
  );
};

export default HomePage;
