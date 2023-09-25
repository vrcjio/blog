"use client"
import { useEffect, useState } from 'react';
import { Provider } from "react-redux";
import { store } from "./store";
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from './user';
import { getUserPosts } from './post';
import page from '@/app/page';
const ReduxProvider = ({ children, }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <DefaultComponent>
        {children}
      </DefaultComponent>
    </Provider>
  )
}

const DefaultComponent = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.data);
  const post = useSelector((state: any) => state.post);
  const [getOneTime, setGetOneTime] = useState(0);
  //first get user data
  useEffect(() => {
    dispatch(setUserData());
  }, [])

  //second get user posts
  useEffect(() => {
    if (user && getOneTime === 0) { //if user is exsiting, getOneTime is confirme to call funciton only one time
      setGetOneTime(1)
      const authorId = user._id;
      dispatch(getUserPosts({ authorId }))
    }
  }, [user]);

  //if user change add requrest to next page for next post
  useEffect(() => {
    if (user?._id && post?.currentPage) {
      const authorId = user._id;
      const page = post.currentPage || 0;
      dispatch(getUserPosts({ authorId, page }));
    }
  }, [post?.loadPages]);

  //if use Add new post run this effect
  useEffect(() => {
    if (post?.newPost) {
      if (user?._id) {
        const authorId = user._id;
        dispatch(getUserPosts({ authorId}));
      }
    }
  }, [post?.newPost])

  return <>{children}</>;
};



export default ReduxProvider