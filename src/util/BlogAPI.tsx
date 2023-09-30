import axios from "axios";
import toast from "react-hot-toast";

//POST API's
export const getUserBlogs = async (payload: any) => {
    try {
        const { data } = await axios.post("/api/post", payload);
        toast.success(data?.message);
        return data;

    } catch (error: any) {
        toast.error(error?.response?.data?.message);
        return error;
    }
}


export const postBlogAPI = async (payload: any) => {
    try {
        const { data } = await axios.post('/api/post/addPost', payload);
        toast.success(data?.message);
        return data;
    } catch (error: any) {
        toast.error(error?.response?.data?.message);
        return error;
    }
}


export const deletePostAPI = async (payload: any) => {
    try {
        const { data } = await axios.post('/api/post/deletePost', payload);
        toast.success(data?.message);
        return data;

    } catch (error: any) {
        toast.error(error?.response?.data?.message);
        return error;
    }
}

export const getPostAPI = async (payload: any) => {
    try {
        const { data } = await axios.post("/api/post/getPost", payload);
        toast.success(data?.message);
        return data;
    } catch (error: any) {
        toast.error(error?.response?.data?.message);
        return error;
    }
}