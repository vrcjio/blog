'use client'
import Aos from '@/componets/Aos'
import TopBar from '@/componets/topbar'
import React from 'react'
import { signInFrom } from '@/lib/serverActions'
import { toast } from 'react-hot-toast'
import Link from 'next/link'
import GoogleLoginBtn from '@/componets/GoogleLoginBtn'

const page = () => {
  //Error Handeling
  const [Error, setError] = React.useState({ email: '', password: '' })

  //from action handeling
  const handleOnSubmit = async (formData: FormData) => {
    try {
      const email = formData.get('email')?.toString();
      const password = formData.get('password')?.toString();

      //check validation
      if (email && password) {
        await signInFrom({ email, password });
      } else {
        toast.error('fill the from first');
        setError({ email: "Not Empty", password: "Not Empty" });
      }
    } catch (error: any) {
      toast.error('Error found', error.message);
      // console.log(error.message);
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
                <input name="email" type="email" onChange={() => setError({ ...Error, email: "" })} className="form-control" id="InputEmail" required />
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
            <Link href="#" className='mb-3'>Forgate Password</Link>

            <hr />
            <GoogleLoginBtn />
          </div>
        </div>
      </Aos>

    </>
  )
}

export default page