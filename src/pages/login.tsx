import React, { useEffect, useState } from 'react';

const clientId = '14b259cdaa75f393cf34';
const scopes = 'read:user';

const LoginPage = () => {
  const [redirectURI, setRedirectURI] = useState<string>('');

  useEffect(() => {
    setRedirectURI(`${window.location.origin}/login-callback`);
  }, []);

  return (
    <div>
      <h1>로그인</h1>
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes}`}
      >
        Github으로 로그인하기
      </a>
    </div>
  );
};

export default LoginPage;
