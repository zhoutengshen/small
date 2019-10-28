import axios from "axios";

const MOCK_BASIC_URL = "http://rap2api.taobao.org/app/mock/234349/api"
const BASIC_URL = "/api"
const isDev = process.env.NODE_ENV == 'development';
const instance = axios.create({
    baseURL: isDev ? MOCK_BASIC_URL : BASIC_URL,
    timeout: 1000,
});

instance.interceptors.request.use(config => {
    //这里附带二外的请求报文，例如auth信息
    //TODO:loading 开始动作
    return config;
}, error => Promise.reject(error));

instance.interceptors.response.use(res => {
    //处理resp信息
    //TODO:loading 结束动作
    const { data, status } = res;
    if (status == 200) {
        return data;
    } else {

    }
    console.log(res);

}, error => Promise.reject(error))
export default instance;
