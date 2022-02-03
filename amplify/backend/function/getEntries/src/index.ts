import {
  Handler,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from 'aws-lambda';
import { AxiosResponse } from 'axios';
import { WykopEntry } from '../../types/wykopEntry.types';
import { WykopResponse } from '../../types/wykopResponse.types';
import { getAxiosInstance } from '/opt/nodejs/axios';

export const handler: Handler<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
> = async (event) => {
  const { API_KEY, SECRET, OWM_API_KEY } = process.env;
  const axios = getAxiosInstance(API_KEY!, SECRET!, OWM_API_KEY!);

  const response: AxiosResponse<WykopResponse<WykopEntry[]>> = await axios.get(
    `/entries/hot/page/${event.queryStringParameters?.page}/return/comments/`
  );

  const link = response.data.data; //mapLink(response.data.data, true);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(link),
  };
};
