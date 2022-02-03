Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("/opt/nodejs/axios");
const utils_1 = require("/opt/nodejs/utils");
exports.handler = async (event) => {
    const { API_KEY, SECRET, OWM_API_KEY } = process.env;
    const axios = axios_1.getAxiosInstance(API_KEY, SECRET, OWM_API_KEY);
    const response = await axios.get(`/links/link/${event.pathParameters.id}/withcomments/true/`);
    const link = utils_1.mapLink(response.data.data, true);
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
        },
        body: JSON.stringify(link),
    };
};
