'use client'
import Footer from '@/componets/footer'
import UserBlogLayout from '@/componets/post/userPostLayout'
import TopBar from '@/componets/topbar'
import { setLoading } from '@/lib/Redux/systemSlice'
import { getPostAPI } from '@/util/BlogAPI'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
export default function PublicPost ({ params }: any){
  const [author, setAuthor]: any = useState();


  const dispatch:any  = useDispatch();
  const user = useSelector((state: any) => state.user);
  const post = useSelector((state: any) => state.publicPost);
  const system = useSelector((state: any) => state.system);


  const callApi = async () => {
      try {
        const { data } = await getPostAPI({ id: params.post[0] });
        setAuthor(data);
        dispatch(setLoading(false));
      } catch (error) {
        toast.error("server error");
      }
  }

  const getLocalData = () => {
    const pageIndex = params?.post?.[3];
    const postIndex = params?.post?.[2];
    const data = post?.data?.[pageIndex]?.data?.[postIndex] ?? false;
    if (data ) {
      setAuthor(data);
    } else {
      dispatch(setLoading(true));
      callApi();
    }
  };
    

  useEffect(() => {
    getLocalData();
  }, [user, post])


  return (
    <>
      <TopBar />
      {
        (system.isLoading)?
        <h1>waiting is fetching data</h1>
        :
        (author?.authorId) &&
        <UserBlogLayout userData={user} postContent={author} />
      }

      <Footer />
    </>
  )
}
