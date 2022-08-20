import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import qs from 'qs';

const useOauth = () => {
  const router = useRouter();

  useEffect(() => {
    const sendOauthCode = async () => {
      const { code, state } = qs.parse(window.location.search, { ignoreQueryPrefix: true });
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth/${state}` as string,
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
};

export default useOauth;
