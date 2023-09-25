import axios from "axios";

//POST API's
export const getUserBlogs = async (payload: any) => {
    try {
        const { data } = await axios.post("/api/post", payload);
        return data;

    } catch (error) {
        console.log(error)
        return error;
    }
}


export const postBlogAPI = async (payload: any) => {
    try {
        const { data } = await axios.post('/api/post/addPost', payload);
        return data;
    } catch (error: any) {
        return error;
    }
}


export const deletePostAPI = async (payload: any) => {
    try {
        const { data } = await axios.post('/api/post/deletePost', payload);
        return data;

    } catch (error: any) {
        return error;
    }
}