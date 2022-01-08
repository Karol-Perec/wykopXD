const axios = require("axios");
const { MD5 } = require("crypto-js");
const querystring = require("querystring");

const getAxiosInstance = (apiKey, secret, owmApiKey) => {
  const axiosInstance = axios.create({
    baseURL: "https://a2.wykop.pl",
  });

  axiosInstance.interceptors.request.use((config) => {
    if (config.method === "post") {
      config.url += "/appkey/" + apiKey;
      const signContent =
        secret +
        config.baseURL +
        config.url +
        Object.values(config.data).join(",");
      config.data = querystring.stringify(config.data);
      const apiSign = MD5(signContent).toString();
      config.headers["apisign"] = apiSign;
    } else {
      config.url += "/appkey/" + owmApiKey;
    }

    return config;
  });

  return axiosInstance;
};

module.exports = { getAxiosInstance };
