import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:192.168.0.32',
});

export default api;