import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import { signWithGoogle } from "./serverActions";

const getGoogleCredentials = () => {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET

    //if clientId is not existing
    if (!clientId || clientId?.length === 0) {
        throw new Error('Missing google client id');
    }
    //if client secret not existing
    if (!clientSecret || clientSecret?.length === 0) {
        throw new Error('Missing google client Secret');
    }
    return { clientId, clientSecret };
}

export const authOption: NextAuthOptions = {
  
    providers: [
        GoogleProvider({
            clientId: getGoogleCredentials().clientId,
            clientSecret: getGoogleCredentials().clientSecret,
            httpOptions: {
                timeout: 3500,
            }
        }),
    ], 

    callbacks: {
        async jwt({ _, user }) {
            try {
                if (user?.name && user?.email && user?.image) {
                    const res = await signWithGoogle({
                        username: user.name,
                        email: user.email,
                        profile: user.image
                    })
                    console.log(res);
                }
            }
            catch (error: any) {
                console.log("The Error is : ", error.message);
            }
        }
        
    },
    secret: process.env.AUTH_SECRET,
}