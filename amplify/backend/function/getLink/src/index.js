const { getAxiosInstance } = require('/opt/axios');
const { mapLink } = require('/opt/utils');

exports.handler = async (event) => {
  const { API_KEY, SECRET, OWM_API_KEY } = process.env;
  const axios = getAxiosInstance(API_KEY, SECRET, OWM_API_KEY);

  const response = await axios.get(
    `/links/link/${event.pathParameters.id}/withcomments/true/`
  );

  const link = mapLink(response.data.data);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(link),
  };
};
