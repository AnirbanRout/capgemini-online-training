import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com", 
})

api.interceptors.request.use(
    (config) => {
        const token='secret-token';
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        console.log('Request Interceptor:', config);
        return config;
    }
);


export default api;