import mongoose from "mongoose"


export const DB_Connection = async() =>{
    try {
        await mongoose.connect(process.env.DB_URL!);
        return true;
    } catch (error) {
        return  error;
    }
}
