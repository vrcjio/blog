'use client'
import { signIn, signOut } from "next-auth/react"
import { useSession } from 'next-auth/react';

const GoogleLogoutBtn = () => {
    const session = useSession();
    console.log(session)
    return (
        <>
            <div className="d-grid gap-2">
                <button onClick={signOut} className="btn btn-outline-dark" type="button">Google Logout</button>
            </div>
        </>
    )
}

export default GoogleLogoutBtn