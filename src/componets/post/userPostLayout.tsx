'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function UserBlogLayout({ userData, postContent }) {
  const [like, setLike] = useState(false)
  const [unlike, setUnLike] = useState(false)


  const likeSet = (value: boolean) => {
    setLike(value);
    if (value)
      if (unlike)
        setUnLike(false);
  }
  const diLikeSet = (value: boolean) => {
    setUnLike(value);
    if (value)
      if (like)
        setLike(false);
  }

  useEffect(() => {
    // console.log(postContent) //authorName createdAt category subCategory content authorId shortNote comments _id
  })

  return (
    <>
      <div className="bg-white">
        <div className="container bg-white my-3 ">
          <h6 className='text-uppercase justify-content-center d-flex mt-3 pt-3' style={{ fontSize: '80%' }}>
            <Link href="#MainCat" className='nav-link p-0'>{postContent?.category}</Link>
            /
            <Link href="#MainCat" className='nav-link p-0'>{postContent?.subCategory}</Link>
          </h6>
          <h1 className='text-center p-3 fw-bold'>
            {postContent?.title}
          </h1>


          {/*-------------- author profile------------------ */}
          <div className='d-flex justify-content-center '>
            <div
              className='navbar-brand border border-4 border-light bg-success rounded-circle p-1 shadow d-flex'
              style={{ width: '45px', height: '45px' }}
              role="button"
              title={postContent?.authorName}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <span className='mx-auto text-transform-capitalize my-auto text-white fw-bold'>
                {postContent?.authorName[0]}
              </span>
            </div>
            <div className=''>
              <Link href="#author" className='nav-link text-secondary p-0'>{postContent?.authorName}</Link>
              <span>{postContent?.createdAt?.split('T')[0]}</span>
            </div>
          </div>

          <hr />

          {/*------------------- userData post----------------------- */}
          <div className='container my-3 py-3'>
            <div className='container p-3' dangerouslySetInnerHTML={{ __html: postContent?.content || "waiting" }} ></div >
          </div>


          {/*--------------------------- like dislike and comment buttons -------------------------*/}
          <hr />
          <div className=''>
            <div className='float-end'>
              <button className='btn btn-light p-0 mx-2' onClick={() => likeSet(!like)}>
                {(like) ?
                  <i className="fa-solid text-primary fa-thumbs-up"></i> :
                  <i className="fa-regular text-primary fa-thumbs-up"></i>
                }
              </button>

              <button className='btn btn-light p-0 mx-2' onClick={() => diLikeSet(!unlike)}>
                {(unlike) ?
                  <i className="fa-solid text-primary fa-thumbs-down"></i> :
                  <i className="fa-regular text-primary fa-thumbs-down"></i>
                }
              </button>
              <button className='btn btn-light p-0 mx-2'>
                <i className="text-primary fa-sharp fa-regular fa-comments"></i>
              </button>
            </div>
            <div className='text-secondary' style={{ fontSize: "80%" }}>
              Like : 01 | unlike : 00 | views : 1
            </div>
            <h6></h6>
          </div>

          {/*------------------------ view all post --------------------------------------*/}
          <div className='d-flex justify-content-center'>
            <Link href="#See all posts" className='nav-link p-0 '>
              <i className="fa-sharp fa-solid fa-chevron-left "></i><i className="fa-sharp fa-solid fa-minus me-2"></i>
              view all posts
            </Link>
          </div>


          {/*----------------------------- author about  ----------------------------------*/}
          <div className='d-flex justify-content-center my-3  bg-light p-3 rounded-5 shadow'>

            <div
              className='navbar-brand border border-4 border-light bg-success rounded-circle p-1 shadow d-flex'
              style={{ width: '45px', height: '45px' }}
              role="button"
              // title={userData?.username}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <span className='mx-auto text-transform-capitalize my-auto text-white fw-bold'>
              {postContent?.authorName[0]}
              </span>
            </div>
            <div className='col-10 col-md-6'>
              <span className='p-3'>About {postContent?.authorName}</span>
              <p className='text-secondary p-3'>
                {postContent?.shortNote}
                <Link href="#view profile" className='nav-link ps-0'>View Profile</Link></p>
            </div>
          </div>
        </div>

        {/*--------------------------- comments  --------------------------------------*/}
        <div className='container my-3 flex'>
          <hr />
          <div className='mx-auto'>
            <h5>Comments</h5>
            <div className='bg-light p-3'>
              {
                // post comments 
                postContent?.comment?.map((_, index:number) =>
                  <p className='ms-3 p-3 col-md-8 border bg-white' key={index} >
                    <span className='float-end text-secondary'>date and time</span>
                    <h6><Link href="#username" className='nav-link p-0 text-dark'>userData {index + 1}</Link></h6>

                    <span className='ms-3'>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati fugit, tempora commodi aliquid sapiente ipsam, corporis nobis eum at quidem veritatis repellat, sint impedit modi dolorem magnam quia nisi deleniti.
                    </span>
                  </p>
                )
              }

              <div className='d-flex justify-content-center'>
                {postContent?.comment?.length > 5 &&
                  <Link href="#view More" className='nav-link p-0 '>
                    view all More
                  </Link>
                }
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
