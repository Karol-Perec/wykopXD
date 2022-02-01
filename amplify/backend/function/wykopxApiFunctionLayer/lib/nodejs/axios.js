Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const crypto_js_1 = require("crypto-js");
exports.getAxiosInstance = (apiKey, secret, owmApiKey) => {
    const axiosInstance = axios_1.default.create({
        baseURL: 'https://a2.wykop.pl',
    });
    axiosInstance.interceptors.request.use((config) => {
        if (config.method === 'post') {
            config.url += '/appkey/' + apiKey;
            const signContent = secret +
                config.baseURL +
                config.url +
                Object.values(config.data).join(',');
            const apiSign = crypto_js_1.MD5(signContent).toString();
            config.headers['apisign'] = apiSign;
        }
        else {
            config.url += '/appkey/' + owmApiKey;
        }
        return config;
    });
    return axiosInstance;
};
