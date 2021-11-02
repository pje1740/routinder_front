import { useState } from 'react';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  const [userName, setUserName] = useState<string>('user');
  return (
    <>
      <h1>hello, {userName}</h1>
    </>
  );
};

export default HomePage;
