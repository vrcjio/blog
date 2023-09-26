'use client'

import { useSelector, useDispatch } from 'react-redux'
import RenderHTML from './renderHTML'
import React from 'react'
import { getPostsbyRedux } from '@/lib/Redux/post'

const ShowBlogs = () => {
    const posts = useSelector((state: any) => state.post);
    const [id, setId] = React.useState();
    const [openPage, setOpenPage]:any = React.useState();
    const dispatch = useDispatch();

    const changePage = (pageNo: number) => {
        dispatch(getPostsbyRedux(pageNo))
    }

    React.useEffect(() => {
        setId(posts?.data?.authorId);
        setOpenPage(posts?.currentPage);
    })
    return (
        <>
            <h6 className='m-2 me-5 pe-5  text-secondary position-absolute end-0 '>total : {posts.data[openPage-1]?.totalData && posts.data[openPage-1]?.totalData}</h6>
            <div className="accordion-body d-flex flex-wrap">
                {
                    posts.isLoading ?
                        <div className="spinner-border text-secondary mx-auto" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        :

                        posts.data[openPage-1]?.data ?
                        posts.data[openPage-1]?.data.map((item: any, index: number) =>
                            <RenderHTML item={item} index={index} pageIndex={openPage-1} />
                        )
                        :
                        <h1>Not post here</h1>
                }
            </div>
            <div className='bg-light border d-flex justify-content-center'>
                {
                    posts.data[openPage-1]?.totalPages &&
                    posts.data[openPage-1]?.page != 1 &&
                    <button onClick={() => changePage(posts.data[openPage-1].page - 1)} className={`btn rounded-0 border btn-light`}><i className="fa-sharp fa-solid fa-angle-left"></i></button>
                }
                {
                    posts.data[openPage-1]?.totalPages &&
                    Array(posts.totalPages).fill(0).map((_, index) =>
                        Array(3).fill(0).map((_, p) => {
                            if (index + 1 === posts.data[openPage-1]?.page + p || index + 1 === posts.data[openPage-1]?.page - p) {
                                return <button onClick={() => changePage(index + 1)} className={`btn rounded-0 border ${posts.data[openPage-1].page === index + 1 ? 'btn-secondary' : 'btn-light'}`}>{index + 1}</button>
                            }
                        })
                    )
                }
                {
                    posts.data[openPage-1]?.totalPages &&
                    posts.data[openPage-1]?.totalPages != posts.data[openPage-1]?.page &&
                    <button onClick={() => changePage(posts.data[openPage-1].page + 1)} className={`btn rounded-0 border btn-light`}><i className="fa-sharp fa-solid fa-chevron-right"></i></button>
                }
          
            </div>
        </>
    )
}

export default ShowBlogs