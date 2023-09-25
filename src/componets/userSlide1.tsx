'use client'
import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import Image from 'next/image'

const UserSlide1 = () => {
  const userData = useSelector((state: any) => state.user.data);
  const creationDate = new Date(userData.accountCreatedData);

  return (
    <>
      <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body m-3">
          <div className='row'>
            <div className='col-4 mx-auto text-center'>

              <div
                className='bg-success mx-auto rounded-circle p-1 shadow d-flex'
                style={{ width: '50px', height: '50px' }}
                role="button"
                title={userData?.username}
              >
                <span className='mx-auto my-auto text-white fw-bold'>{userData?.username[0]}</span>
              </div>
              {/* <Image
                src="/santa.png"
                className="rounded-circle p-1 shadow"
                width={100} height={100}
                role="button"
                layout='responsive'
                alt={userData?.username}
                title={userData?.username}
              /> */}
              <Link href="#EditProfile" className='nav-link text-secondary d-flex' role='button'>
                {userData?.username}
                <i className=" ms-2 fa-regular fa-pen-to-square"></i>
              </Link>
            </div>
          </div>
          <span className='fs-10 text-secondary'>Options</span>
          <div className="dropdown mt-3 d-grid gap-2">
            <button type="button" className="btn text-start btn-outline-dark rounded-0 border-end-0 border-start-0">
              <i className="fa-sharp fa-solid fa-bell fa-shake"></i> Notifications <span className="badge bg-danger">4</span>
            </button>
          </div>
          <div className="dropdown mt-3 d-grid gap-2">
            <button type="button" className="btn text-start btn-outline-dark rounded-0 border-end-0 border-start-0">
              <i className="fa-sharp fa-solid fa-gear fa-spin"></i> Settings
            </button>
          </div>
          <div className="dropdown mt-5 d-grid gap-2">
            <button type="button" className="btn text-start btn-outline-danger rounded-0 border-end-0 border-start-0">
              <i className="fa-sharp fa-solid fa-right-from-bracket"></i>Logout
            </button>
          </div>
        </div>

        <div className='text-center text-secondary fs-6 mb-3'>
          Account was created {creationDate.toISOString().split('T')[0]}
        </div>
      </div>
    </>
  )
}

export default UserSlide1