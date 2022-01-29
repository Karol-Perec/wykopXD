const { getAxiosInstance } = require('/opt/axios');
const { mapLinks } = require('/opt/utils');

exports.handler = async (event) => {
  const { API_KEY, SECRET, OWM_API_KEY } = process.env;
  const axios = getAxiosInstance(API_KEY, SECRET, OWM_API_KEY);

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
