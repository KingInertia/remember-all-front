import axiosInstance from "../../api/axiosInstance";

export const registerUser = async (userData: { username: string; email: string; password: string }) => {
    const response = await axiosInstance.post("/auth/users/", userData);
    return response.data;
}

export const loginUser = async (credentials: { username: string; password: string }) => {
    const response = await axiosInstance.post("/auth/jwt/create/", credentials);
    return response.data;
}

export const logoutUser = async () => {
    const response = await axiosInstance.post("/auth/jwt/create/");
    return response.data;
}

export const verifyToken = async (token: string) => {
    const response = await axiosInstance.post("/auth/jwt/verify/", { token });
    return response.data;
}