import axios from "axios";

//GET API's
export const userSignInAPI = async () => {
    try {
        const {data} = await axios.get("/api/user/signin");
        return data;

    } catch (error) {
        return error;
    }
}

export const signOutUserAPI = async () => {
    try {
        const { data } = await axios.get('/api/user/signout');
        return data;
    } catch (error) {
        return error;
    }
}

//POST API's
export const userSignInPostAPI = async (payload:any) => {
    try {
        const {data} = await axios.post("/api/user/signin",payload);
        return data;

    } catch (error) {
        return error;
    }
}
export const userSignUpAPI = async (payload:any) => {
    try {
        const {data} = await axios.post('/api/user/signup',payload);
        return data;

    } catch (error) {
        return error;
    }
}
export const userRegisterAPI = async (payload:any) => {
    try {
        const {data} = await axios.post("/api/user/signin",payload);
        return data;

    } catch (error) {
        return error;
    }
}