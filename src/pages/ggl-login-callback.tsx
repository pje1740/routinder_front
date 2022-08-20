import React, { useEffect } from 'react';
import qs from 'qs';
import { useRouter } from 'next/router';
import axios from 'axios';

const gglLoginCallback = () => {
  const router = useRouter();
  useEffect(() => {
    const sendOauthCode = async () => {
      const { code } = qs.parse(window.location.search, { ignoreQueryPrefix: true });
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth/google` as string,
        {
          data: { code },
        },
        { withCredentials: true },
      );
      const { token } = data;

      if (!token) {
        router.push('/login');
      }
      router.push('/home');
    };

    sendOauthCode();
  }, []);

  return (
    <div>
      <h1>login callback page</h1>
    </div>
  );
};

export default gglLoginCallback;
