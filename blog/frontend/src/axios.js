import axios from 'axios';

const instance = axios.create({
    //baseURL: "http://localhost:8000"
    //baseURL: "http://127.0.0.1:8000"
    baseURL: "http://192.168.1.106:8000"
    //baseURL: "http://68.183.78.125:8001/"
});

//axios.defaults.withCredentials = true;

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;