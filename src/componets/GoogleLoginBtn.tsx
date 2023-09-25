'use client'
import { signIn, signOut } from "next-auth/react"
import { useSession } from 'next-auth/react';

const GoogleLoginBtn = () => {
    const session = useSession();
    console.log(session)
    return (
        <>
            <div className="d-grid gap-2">
                <button onClick={signIn} className="btn btn-outline-dark" type="button">Google Login</button>
            </div>
        </>
    )
}

export default GoogleLoginBtn