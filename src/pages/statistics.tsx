import { useState } from 'react';
import { NextPage } from 'next';

const StatisticsPage: NextPage = () => {
  const [userName, setUserName] = useState<string>('user');
  return (
    <>
      <h1>{`${userName}님의 통계 페이지입니다.`}</h1>
    </>
  );
};

export default StatisticsPage;
