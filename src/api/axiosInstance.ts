import axios from "axios";
import store from "../store/store";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 4000, 
});

axiosInstance.interceptors.request.use((config) => {
    console.log("INTERCEPTOR: Adding Authorization header if accessToken exists");
    const token = store.getState().auth.accessToken;
    console.log("Current accessToken:", token);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

axiosInstance.interceptors.response.use(response => response, async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            const refreshToken = store.getState().auth.refreshToken;
            console.log(refreshToken)
            if (refreshToken) {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/jwt/refresh/`, { refresh: refreshToken });
                store.dispatch({ type: 'auth/setAuthToken', payload: { accessToken: response.data.access, refreshToken } });
                originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`;
                return axiosInstance(originalRequest);
            }
        } catch (error) {
            store.dispatch({ type: 'auth/logout' });
            window.location.href = '/auth';
            return Promise.reject(error);
        }
    }
    return Promise.reject(error);
} )   

export default axiosInstance;