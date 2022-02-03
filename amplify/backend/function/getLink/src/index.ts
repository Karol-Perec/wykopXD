import {
  Handler,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from 'aws-lambda';
import { AxiosResponse } from 'axios';
import { WykopLink } from '../../types/wykopLink.types';
import { WykopResponse } from '../../types/wykopResponse.types';
import { getAxiosInstance } from '/opt/nodejs/axios';
import { mapLink } from '/opt/nodejs/utils';

export const handler: Handler<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
> = async (event) => {
  const { API_KEY, SECRET, OWM_API_KEY } = process.env;
  const axios = getAxiosInstance(API_KEY!, SECRET!, OWM_API_KEY!);

  const response: AxiosResponse<WykopResponse<WykopLink>> = await axios.get(
    `/links/link/${event.pathParameters?.id}/withcomments/true/`
  );

  const link = mapLink(response.data.data, true);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(link),
  };
};
