'use client'
import { getPublicPosts } from '@/lib/Redux/publicPost';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function InternetConnection() {
    const dispatch: any = useDispatch();
    const post = useSelector((state: any) => state.publicPost);
    return (
        <div className="card border-0 mx-auto" style={{ width: "18rem" }}>
            {/* <img src="/error404Page.png" className="card-img-top" alt="404" /> */}
            <img src="/ConnectionBreak.png" className="card-img-top" alt="internetConnectionBreak" />
            <div className="card-body text-center">
                <h5 className="card-title">Internet Connection break</h5>
                <p className="card-text">
                    Oops{"!"} It seems you{"'"}ve ventured into uncharted territory. Let{"'"}s get you back on track.
                    I think you need refresh ?
                    <br />
                    <span className='text-danger fw-bold'>
                        {post?.data[0]?.message}
                    </span>
                </p>

                <button onClick={() => dispatch(getPublicPosts())} className="btn btn-outline-info">
                    Retry To Connect
                </button>
            </div>
        </div>
    )
}

export default InternetConnection