import { useState } from 'react';
import { NextPage } from 'next';

import FillButton from '@/components/atoms/buttons/FillButton';

const HomePage: NextPage = () => {
  const [userName, setUserName] = useState<string>('user');
  return (
    <>
      <h1 className="text-red-400">hello, {userName}</h1>
      <FillButton label="hi" onClick={() => console.log('hi')} />
    </>
  );
};

export default HomePage;
