'use client'
import Aos from '@/componets/Aos';
import TopBar from '@/componets/topbar';
import React from 'react';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '@/lib/Redux/user';
import { getUserPosts } from '@/lib/Redux/post';
import { userSignInPostAPI } from '@/util/userAPIs';

const Page = () => {
  //Error Handeling
  const [Error, setError] = React.useState({ email: '', password: '' });
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.data);
  const [routeBtnLoading, setRouteBtnLoading] = React.useState(false);

  //from action handeling
  const handleOnSubmit = async (formData: FormData) => {
    try {
      const email = formData.get('email')?.toString();
      const password = formData.get('password')?.toString();

      if (!email || !password) {
        if (!email) {
          setError({ ...Error, email: "Add Email first" });
        }
        if (!password) {
          setError({ ...Error, password: "Add password is compalsory" });
        }
      } else {
         const {data} = await userSignInPostAPI({ email, password });
        //set Redux data
         dispatch(setUserData());
         if(user && user._id){
          dispatch(getUserPosts({authorId:user.id}));
         }
        
        
        //set redux data
        router.push("/user");
      }
    } catch (error: any) {
      console.log(error);
      if (error.response.data.errorMsg == 'email') {
        setError({ ...Error, email: "Invalied mail id" });
      }
      if (error.response.data.errorMsg == 'password') {
        setError({ ...Error, password: "Invalied password" });
      }
      toast.error(error.response.data.message);
    }

  }


  return (
    <>
      <TopBar />
      <Aos animation='zoom-out'>
        <div className='container'>
          <div className='mx-auto p-3 rounded-3 shadow' style={{ maxWidth: "18rem" }}>
            <h3 className='text-center mb-3'>Login Form</h3>
            <form action={handleOnSubmit}>
              <div className="mb-3">
                <label htmlFor="InputEmail" className="form-label">Email address</label>
                <input name="email" type="email" onChange={() => setError({ ...Error, email: "" })} className="form-control" id="InputEmail" autoFocus required />
                <div id="emailError" className="form-text text-danger">{Error.email}</div>
              </div>
              <div className="mb-3">
                <label htmlFor="InputPassword" className="form-label">Password</label>
                <input name="password" type="password" onChange={() => setError({ ...Error, password: "" })} className="form-control" id="InputPassword" autoComplete='off' required />
                <div id="passwordError" className="form-text text-danger">{Error.password}</div>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="InputCheck" />
                <label className="form-check-label" htmlFor="InputCheck">Check me out</label>
              </div>
              <button type="submit" className="btn btn-outline-dark mb-3">Sign In</button>
            </form>
            <Link href="#" className='mb-3'>Forgate Password</Link><br />
            <div className="d-grid gap-2">
            {
                routeBtnLoading ?
                  <div className="spinner-border text-secondary mx-auto" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div> :
                 <button onClick={()=>{setRouteBtnLoading(true);router.push("/signup")}} className="btn my-3 btn-outline-info" type="button">Sign Up Now</button>
              }
            </div>
          </div>
        </div>
      </Aos>

    </>
  )
}

export default Page