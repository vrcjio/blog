"use client"
import axios from "axios";
import toast from "react-hot-toast";

//GET API's
export const userSignInAPI = async () => {
    try {
        const { data } = await axios.get("/api/user/signin");
        toast.success(data?.message);
        return data;

    } catch (error:any) {
        toast(error?.response?.data?.message);
        return error;
    }
}

export const signOutUserAPI = async () => {
    try {
        const { data } = await axios.get('/api/user/signout');
        toast.success("success 🎉");
        return data;
    } catch (error: any) {
        toast.error("error");
        return error;
    }
}

//POST API's
export const userSignInPostAPI = async (payload: any) => {
    try {
        const { data } = await axios.post("/api/user/signin", payload);
        const audio = new Audio("@/sounds/success-sound.mp3");
        audio.play();
        toast.success("success 🎉");
        return data;

    } catch (error: any) {
        toast.error(error?.response?.data?.message);
        return error;
    }
}
export const userSignUpAPI = async (payload: any) => {
    try {
        const { data } = await axios.post('/api/user/signup', payload);
        toast.success(data?.message);
        return data;

    } catch (error :any) {
        toast.error(error?.response?.data?.message);
        return error;
    }
}
export const userRegisterAPI = async (payload: any) => {
    try {
        const { data } = await axios.post("/api/user/register", payload);
        toast.success(data?.message);
        return data.emsage;

    } catch (error: any) {
        toast.error(error.response.data.error)
        return error.response.data.error;
    }
}