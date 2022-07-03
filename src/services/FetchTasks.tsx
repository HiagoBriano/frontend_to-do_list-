import axios from 'axios';
import { IFetchTasks } from '../interface/task';

import { API_URL } from './API_URL';

export const FetchTasks = async (token: string): Promise<IFetchTasks> => {
  const response = await axios
    .get(`${API_URL}task`, {
      headers: {
        authorization: token,
      },
    })
    .then((response) => response.data)
    .catch((error) => error);

  return response;
};
