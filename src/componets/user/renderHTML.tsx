'use client'

import { deletePostInRedux, getUserPosts } from '@/lib/Redux/post'
import { deletePostAPI } from '@/util/BlogAPI'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import {useDispatch} from 'react-redux'
const RenderHTML = ({ item, index }: any) => {
    const dispatch = useDispatch();

    const deletePost = async () => {
        try {
            const {data} = await deletePostAPI({_id:item._id})
            console.log(data)
            dispatch(getUserPosts({authorId:item.authorId}));
            dispatch(deletePostInRedux({page:index}));

        } catch (error:any) {
            console.log("error is : ", error)
        }
    }

    return (
        <div key={index} className="card mx-auto my-3" key={index} style={{ width: "18rem" }}>
            {/* <Image layout='responsive' width={200} height={200} src="/santa.png" className="card-img-top" alt="santa" /> */}
            <div className="card-body">
                <span className='text-secondary float-end'>
                    {item.createdAt.split('T')[0]}
                </span>
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                    {/* <div dangerouslySetInnerHTML={{ __html: item.content }} ></div> */}
                    {item.shortNote}
                    ... <Link className='text-secondary text-decoration-none' href={`/post/${item._id}`}>Read More</Link>
                </p>
                <div className='mb-3'>
                    <span>Related :
                        <Link href={`#${item.category}`}>{item.category}</Link>
                        /
                        <Link href={`#${item.subCategory}`}>{item.subCategory}</Link>                            </span>
                    <span className='float-end text-secondary fst-italic'>Author <Link className='nav-link text-secondary' href="#Authour">{item.authorName}</Link></span>
                </div>
                <a href="#" className="btn btn-warning me-1">Edit</a>
                <button className="btn btn-danger me-1" onClick={deletePost}>Delete</button>
            </div>
        </div>
    )
}

export default RenderHTML