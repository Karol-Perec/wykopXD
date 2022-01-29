const { getAxiosInstance } = require('/opt/axios');

exports.handler = async (event) => {
  const { API_KEY, SECRET, OWM_API_KEY } = process.env;
  const axios = getAxiosInstance(API_KEY, SECRET, OWM_API_KEY);

  const response = axios.get(
    `/links/link/${event.pathParameters.id}/withcomments/true/`
  );
  console.log(response);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(response.data),
  };
};
