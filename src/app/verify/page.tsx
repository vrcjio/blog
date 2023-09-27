'use client'
import TopBar from '@/componets/topbar';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { userRegisterAPI } from '@/util/userAPIs';

const Verify = () => {

  const [msg, setMsg] = useState("");
  const [token, setToken] = useState("");
  const router = useRouter();

  const sendData = async () => {
    try {
      setMsg("please wait token verifying");
      const { data} = await userRegisterAPI({ token });
      setMsg(data);
      router.push('/signin');
    }catch(error){
      toast.error("error funcation call")
    }
  }

  useEffect(() => {
    const urlToken = window.location.search.split("=");
    setToken(urlToken[1] || "");
    setMsg("No Token detected");
  }, [])

  useEffect(() => {
    setMsg("token detected please wait");
    if (token.length > 0) {
      sendData();
    }
  }, [token])

  return (
    <>
      <TopBar />
      <div className='text-center m-5 p-5'>
        {msg}
        <br />
        <div className="spinner-border text-warning m-5 p-3" role="status">
        </div>
      </div>
    </>
  )
}

export default Verify