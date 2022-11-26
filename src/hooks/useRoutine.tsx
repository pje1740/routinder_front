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

const getRoutinesQuery = () => `
query {
  routines {
    title,
    startDate,
    endDate    
  }
}`;

const useRoutine = () => {
  const getRoutines = async () => {
    const { data } = await sendGQLRequest(getRoutinesQuery());

    return data.routines;
  };

  const createRoutine = async (params: createRoutineParams) => {
    const { data } = await sendGQLRequest(createRoutineQuery(params));

    return data;
  };

  return {
    createRoutine,
    getRoutines,
  };
};

export default useRoutine;
