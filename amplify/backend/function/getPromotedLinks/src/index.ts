import { getAxiosInstance } from '/opt/nodejs/axios';
import { mapLinks } from '/opt/nodejs/utils';

export const handler = async (event: any) => {
  const { API_KEY, SECRET, OWM_API_KEY } = process.env;
  const axios = getAxiosInstance(API_KEY!, SECRET!, OWM_API_KEY!);

  const response = await axios.get(
    '/links/promoted/page/' + event.queryStringParameters.page
  );

  const links = mapLinks(response.data.data);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(links),
  };
};
