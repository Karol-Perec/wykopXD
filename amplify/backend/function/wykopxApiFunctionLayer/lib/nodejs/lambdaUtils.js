Object.defineProperty(exports, "__esModule", { value: true });
exports.createResponse = void 0;
const createResponse = (body, statusCode) => ({
    statusCode,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(body),
});
exports.createResponse = createResponse;
