'use client'
import TopBar from '@/componets/topbar'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const post = ({ params }: { params: {post:any} }) => {
  const post = useSelector((state:any)=>state.post);
  
  return (
    <>
      <TopBar />
      <div dangerouslySetInnerHTML={{ __html: params.post[1] }} ></div>
    </>
  )
}

export default post