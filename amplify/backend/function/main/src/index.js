const { getAxiosInstance } = require("/opt/axios");
const { mapLinks } = require("/opt/utils");

exports.handler = async (event) => {
  const response = await getAxiosInstance(
    process.env.API_KEY,
    process.env.SECRET,
    process.env.OWM_API_KEY
  ).get("/Links/Promoted/page/" + event.pathParameters.pageNumber);

  const links = mapLinks(response.data.data);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(links),
  };
};
