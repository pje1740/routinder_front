import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import * as cookie from 'cookie';
import router from 'next/router';

const ghClientId = '14b259cdaa75f393cf34';
const ghScopes = 'read:user';
const gglClientId = '294482240156-ngbk244rak8hme2a9plnspp5k22dnf00.apps.googleusercontent.com';
const gglScope = 'https://www.googleapis.com/auth/userinfo.email';

interface LoginPageProps {
  jwtToken: string | null;
}

const LoginPage = ({ jwtToken }: LoginPageProps) => {
  const [redirectURI, setRedirectURI] = useState<string>('');

  useEffect(() => {
    // TODO: jwtToken 존재 시 메인 화면으로 리디렉트
    // 엄밀하게 늘 서버에 요청하여 유효기간 지난지 체크 필요
    if (jwtToken) {
      router.push('/home');
    }
    setRedirectURI(`${window.location.origin}/login-callback`);
  }, []);

  return (
    <>
      {!jwtToken && (
        <div>
          <h1>로그인</h1>
          <a
            href={`https://github.com/login/oauth/authorize?client_id=${ghClientId}&redirect_uri=${redirectURI}&scope=${ghScopes}&state=github`}
          >
            Github으로 로그인하기
          </a>
          <br />
          <a
            href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${gglClientId}&redirect_uri=${redirectURI}&response_type=code&scope=${gglScope}&access_type=offline&state=google`}
          >
            Google로 로그인하기
          </a>
        </div>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = cookie.parse(context.req.headers.cookie || '');
  return {
    props: { jwtToken: cookies.jwtToken || null },
  };
};

export default LoginPage;
