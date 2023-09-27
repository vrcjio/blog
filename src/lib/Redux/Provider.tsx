"use client"
import { useEffect, useState } from 'react';
import { Provider } from "react-redux";
import { store } from "./store";
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from './user';
import { getUserPosts } from './post';
import { getPublicPosts } from './publicPost';
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
  const dispatch: any = useDispatch();
  const user = useSelector((state: any) => state.user.data);
  const post = useSelector((state: any) => state.post);
  const publicPost = useSelector((state: any) => state.publicPost);
  //first get user data
  useEffect(() => {
    dispatch(setUserData());
    dispatch(getPublicPosts({}))
  }, []);

  //second get user posts
  useEffect(() => {
    if (user) { //if user is exsiting, getOneTime is confirme to call funciton only one time
      const authorId = user._id;
      dispatch(getUserPosts({ authorId }))
    }
  }, [user?._id]);

  //if user change add requrest to next page for next post
  //for user private post
  useEffect(() => {
    if (user?._id && post?.currentPage) {
      const authorId = user._id;
      const page = post.currentPage || 0;
      dispatch(getUserPosts({ authorId, page }));
    }
  }, [post?.loadPages]);

  //for public post
  useEffect(() => {
    if (publicPost?.currentPage) {
      const page = publicPost.currentPage || 0;
      dispatch(getPublicPosts({ page }));
    }
  }, [publicPost?.loadPages]);

  //if use Add new post run this effect
  useEffect(() => {
    if (post?.newPost) {
      if (user?._id) {
        const authorId = user._id;
        dispatch(getUserPosts({ authorId }));
      }
    }
  }, [post?.newPost])

  return <>{children}</>;
};



export default ReduxProvider