import axios from 'axios';

// const BASE_URL = process.env.BASE_URL;
// const PORT = process.env.PORT;

const instance = axios.create({
    //baseURL: "http://localhost:8000"
    //baseURL: "http://127.0.0.1:8000"
    //baseURL: "http://192.168.1.106:8000"
    // baseURL: "http://68.183.78.125:80/"
    baseURL: process.env.BASE_URL
    // baseURL: BASE_URL + ':' + PORT
});
//axios.defaults.withCredentials = true;

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;