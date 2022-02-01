import { getAxiosInstance } from '/opt/nodejs/axios';
import { mapLink } from '/opt/nodejs/utils';

export const handler = async (event: any) => {
  const { API_KEY, SECRET, OWM_API_KEY } = process.env;
  const axios = getAxiosInstance(API_KEY!, SECRET!, OWM_API_KEY!);

  const response = await axios.get(
    `/links/link/${event.pathParameters.id}/withcomments/true/`
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
