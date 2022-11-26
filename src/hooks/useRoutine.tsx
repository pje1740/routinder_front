import { useState } from 'react';
import { convertDateToString } from '@/utils/date';
import { sendGQLRequest } from '@/api/graphql';

interface createRoutineParams {
  userId: number;
  title: string;
  startDate: Date;
  endDate: Date;
  days: string;
  stickerId: number;
}

const createRoutineQuery = ({
  userId,
  title,
  startDate,
  endDate,
  days,
  stickerId,
}: createRoutineParams) => `
mutation {
    createRoutine(createRoutineInput: {
        userId: ${userId},
        title: "${title}",
        startDate: "${convertDateToString(startDate)}",
        endDate: "${convertDateToString(endDate)}",
        days: "${days}",
        stickerId: ${stickerId}
    }) {
        id,
        title
    }
}
`;

const useRoutine = () => {
  const [routines, setRoutines] = useState();

  // TODO: 루틴 불러오기

  const createRoutine = async (params: createRoutineParams) => {
    const data = await sendGQLRequest(createRoutineQuery(params));

    return data;
  };

  return {
    routines,
    createRoutine,
  };
};

export default useRoutine;
