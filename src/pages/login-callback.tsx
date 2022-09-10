import React from 'react';
import useOauth from '@/hooks/useOauth';

const LoginCallback = () => {
  useOauth();

  return <div />;
};

export default LoginCallback;
