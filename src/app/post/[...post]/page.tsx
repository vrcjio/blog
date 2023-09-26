'use client'
import UserBlogLayout from '@/componets/post/userPostLayout'
import TopBar from '@/componets/topbar'
import { getPostAPI } from '@/util/BlogAPI'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const post = ({ params }: any) => {
  const [author, setAuthor]: any = useState();
  const [content, setContent]: any = useState();
  const [needAPI, setNeedAPI]: any = useState(false);


  const user = useSelector((state: any) => state.user);
  const post = useSelector((state: any) => state.post);


  const callApi = async () => {
      try {
        const { data } = await getPostAPI({ id: params.post[0] });
        setAuthor(data);
        setContent(data.content);
        console.log("calling api");
      } catch (error) {
        setContent("somthing error detected... try again.");
      } finally {
        setNeedAPI(false);
      }
  }

  const getLocalData = () => {
    const pageIndex = params?.post?.[3];
    const postIndex = params?.post?.[2];
    const data = post?.data?.[pageIndex]?.data?.[postIndex] ?? false;
    console.log(data);
    if (data ) {
      setNeedAPI(false);
      setAuthor(data);
      setContent(data?.content);
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

    </>
  )
}

export default post