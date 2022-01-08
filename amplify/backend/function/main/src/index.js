const { getAxiosInstance } = require("/opt/axios");

exports.handler = async (event) => {
  const wykopResponse = await getAxiosInstance(
    process.env.API_KEY,
    process.env.SECRET,
    process.env.OWM_API_KEY
  ).get("/Links/Promoted/page/" + event.pathParameters.pageNumber);

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(wykopResponse.data),
  };
  return response;
};
