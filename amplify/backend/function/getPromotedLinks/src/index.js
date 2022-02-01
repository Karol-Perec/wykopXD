Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("/opt/nodejs/axios");
const utils_1 = require("/opt/nodejs/utils");
exports.handler = async (event) => {
    const { API_KEY, SECRET, OWM_API_KEY } = process.env;
    const axios = axios_1.getAxiosInstance(API_KEY, SECRET, OWM_API_KEY);
    const response = await axios.get('/links/promoted/page/' + event.queryStringParameters.page);
    const links = utils_1.mapLinks(response.data.data);
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
        },
        body: JSON.stringify(links),
    };
};
