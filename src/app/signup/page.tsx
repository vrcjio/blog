'use client'
import Aos from '@/componets/Aos'
import TopBar from '@/componets/topbar'
import React from 'react'
import { toast } from 'react-hot-toast'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { userSignUpAPI } from '@/util/userAPIs'

export default function SignUpPage(){
  const [Error, setError] = React.useState({ email: '', password: '', username: '', checkBox: '' });
  const router = useRouter();
  const [checkbox, setCheckBox] = React.useState(true);
  const [routeBtnLoading, setRouteBtnLoading] = React.useState(false);

  const handleOnSubmit = async (formData: FormData) => {
    const username = formData.get('username')?.toString();
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();

    if (username) {
      if (username?.length < 4) {
        setError({ ...Error, username: 'At least 4 character set' })
      }
    }

    if (email) {
      if (email?.length < 4) {
        setError({ ...Error, email: 'Put Valied Email' })
      }
    }
    if (!checkbox) {
      setError({ ...Error, checkBox: 'Is required to check here' });
    }

    if (username && email && password && checkbox) {
      try {
        const { data } = await userSignUpAPI({ username, email, password });
        console.log("data is : ", data)

        toast.success(data.message)
      } catch (error: any) {
        console.log("Error ", error.response.data.error);
        toast.error(error.response.data.error)
      } finally {
      }
    }

  }

  const checkPassword = (password: string) => {
    if (password.length <= 0)
      setError({ ...Error, password: "" })
    else if (password.length < 4)
      setError({ ...Error, password: "too Week" })
    else if (password.length < 8)
      setError({ ...Error, password: "Good" })
    else
      setError({ ...Error, password: "Strong" })
  }

  return (
    <>
      <TopBar />
      <Aos animation='zoom-out'>
        <div className='container'>
          <div className='mx-auto p-3 rounded-3 shadow' style={{ maxWidth: "18rem" }}>
            <h3 className='text-center mb-3'>Registraion Form</h3>
            <form action={handleOnSubmit}>
              <div className="mb-3">
                <label htmlFor="InputEmail" className="form-label">Email address</label>
                <input name="email" type="email" onChange={() => setError({ ...Error, email: "" })} className="form-control" id="InputEmail" autoFocus required />
                <div id="emailError" className="form-text text-danger">{Error.email}</div>
              </div>
              <div className="mb-3">
                <label htmlFor="InputEmail" className="form-label">Username</label>
                <input name="username" type="text" onChange={() => setError({ ...Error, username: "" })} className="form-control" id="InputUsername" required />
                <div id="usernameError" className="form-text text-danger">{Error.username}</div>
              </div>
              <div className="mb-3">
                <label htmlFor="InputPassword" className="form-label">Password</label>
                <input name="password" type="password" onChange={(e) => checkPassword(e.target.value)} className="form-control" id="InputPassword" autoComplete='off' required />
                <div id="passwordError" className={
                  (Error.password == "Strong") ? 'form-text text-success' :
                    (Error.password == "Good") ? 'form-text text-warning' : 'form-text text-danger'
                }
                >{Error.password}</div>
              </div>
              <div className="mb-3 form-check">
                <input onChange={() => setCheckBox(!checkbox)} checked={checkbox} type="checkbox" className="form-check-input" id="InputCheck" required />
                <label className="form-check-label" htmlFor="InputCheck"><Link href="#">I Agery T&C</Link></label>
                <div id="emailError" className="form-text text-danger">{Error.checkBox}</div>
              </div>

              <button type="submit" className="btn btn-outline-dark mb-3">
                Submit
              </button>
            </form>
            <div className="d-grid gap-2">
              {
                routeBtnLoading ?
                  <div className="spinner-border text-secondary mx-auto" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div> :
                  <button onClick={() => {setRouteBtnLoading(true);router.push("/signin")}} className="btn my-3 btn-outline-success" type="button">I have Account</button>

              }
            </div>
            {/* <Link href="#" className='mb-3'>Forgate Password</Link>

            <hr />
            <GoogleLoginBtn /> */}
          </div>
        </div>
      </Aos>

    </>
  )
}
