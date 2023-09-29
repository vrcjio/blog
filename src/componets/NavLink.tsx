'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'

import {useState} from 'react'
import ConfirmationBox from './ConfirmationBox';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { initUser, setUserData } from '@/lib/Redux/user';
import { signOutUserAPI } from '@/util/userAPIs';
import { initAllPost } from '@/lib/Redux/post';




export default function NavLink (){
    const user = useSelector((state: any) => state.user.data);
    const dispatch:any = useDispatch();
    const path = usePathname();

    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const signOut = () => {
        setShowModal(true);
    }
    const ConfirmSignOut = async () => {
        setShowModal(false);
        try {
            signOutUserAPI();
            dispatch(initAllPost());
            dispatch(initUser());
            router.push("/");
        } catch (error) {
            console.log(error);
            toast.error("please try again")
        }
    }

    return (
        <>
            {showModal && <ConfirmationBox
                title="Sure You'r logout"
                trueBtn='Yes'
                falseBtn="No"
                closeModal={() => setShowModal(!showModal)}
                trueFunction={() => ConfirmSignOut()}
            />}

            <span className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link href="/" className={`fw-bold nav-link ${path === '/' && 'text-warning'}`}>
                    Home
                </Link>
                {
                    user ?
                        <>
                            < Link href="/user" className={`fw-bold nav-link ${path === '/user' && 'text-warning'}`}>
                                Dashboard
                            </Link>
                            <Link onClick={signOut} href="#signOut" className={`fw-bold nav-link`}>
                                Sign Out
                            </Link>
                        </>
                        :
                        <Link href="/login" className={`fw-bold nav-link ${path === '/login' && 'text-warning'}`}>
                            Login
                        </Link>
                }
                <Link href="/contactUs" className={`fw-bold nav-link ${path === '/contactUs' && 'text-warning'}`}>
                    Contact Us
                </Link>
            </span >
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-warning" type="submit">Search</button>
            </form>


        </>
    )
}