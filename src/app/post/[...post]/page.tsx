'use client'
import Footer from '@/componets/footer'
import UserBlogLayout from '@/componets/post/userPostLayout'
import TopBar from '@/componets/topbar'
import { getPostAPI } from '@/util/BlogAPI'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
export default function PostPage ({ params }: any){
  const [author, setAuthor]: any = useState();


  const user = useSelector((state: any) => state.user);
  const post = useSelector((state: any) => state.post);


  const callApi = async () => {
      try {
        const { data } = await getPostAPI({ id: params.post[0] });
        setAuthor(data);
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
        user?.data &&
        (user?.data?._id == author?.authorId) &&
        <UserBlogLayout userData={user} postContent={author} />
      }

      <Footer />
    </>
  )
}
