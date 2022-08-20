import React, { useEffect, useState } from 'react';

const ghClientId = '14b259cdaa75f393cf34';
const ghScopes = 'read:user';
const gglClientId = '294482240156-ngbk244rak8hme2a9plnspp5k22dnf00.apps.googleusercontent.com';
const gglScope = 'https://www.googleapis.com/auth/userinfo.email';

const LoginPage = () => {
  const [ghRedirectURI, setGhRedirectURI] = useState<string>('');
  const [gglRedirectURI, setGglRedirectURI] = useState<string>('');

  useEffect(() => {
    setGhRedirectURI(`${window.location.origin}/login-callback`);
    setGglRedirectURI(`${window.location.origin}/login-callback`);
  }, []);

  return (
    <div>
      <h1>로그인</h1>
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${ghClientId}&redirect_uri=${ghRedirectURI}&scope=${ghScopes}&state=github`}
      >
        Github으로 로그인하기
      </a>
      <br />
      <a
        href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${gglClientId}&redirect_uri=${gglRedirectURI}&response_type=code&scope=${gglScope}&access_type=offline&state=google`}
      >
        Google로 로그인하기
      </a>
    </div>
  );
};

export default LoginPage;
