import axios from 'axios';

// TODO: 에러 처리
export const sendGQLRequest = async (query: string) => {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_SERVER_GQL_URL}`,
    {
      query,
    },
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return data;
};
