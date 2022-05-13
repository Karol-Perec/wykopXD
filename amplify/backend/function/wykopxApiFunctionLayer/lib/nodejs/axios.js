var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const crypto_js_1 = require("crypto-js");
const wykopAxiosInstance = axios_1.default.create({ baseURL: 'https://a2.wykop.pl' });
wykopAxiosInstance.interceptors.request.use((config) => {
    if (config.method === 'POST' || !process.env.OWM_API_KEY) {
        config.url += `/appkey/${process.env.API_KEY}`;
        const signContent = process.env.SECRET +
            config.baseURL +
            config.url +
            (config.data ? Object.values(config.data).join(',') : '');
        const apiSign = (0, crypto_js_1.MD5)(signContent).toString();
        config.headers = { ...config.headers, apisign: apiSign };
    }
    else {
        config.url += `/appkey/${process.env.OWM_API_KEY}`;
    }
    return config;
});
exports.default = wykopAxiosInstance;
