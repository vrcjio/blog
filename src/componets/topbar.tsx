'use client'
import React from 'react'
import NavLink from './NavLink'
import UserSlide1 from './userSlide1';
import { useSelector} from 'react-redux';

const TopBar = (props: any) => {
  const user = useSelector((state: any) => state.user.data);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top mb-3">
        <div className="container-fluid">
          {
                user &&
                <>
                    <div
                        className='navbar-brand border border-4 border-light bg-success ms-3 rounded-circle p-1 shadow d-flex'
                        style={{ width: '45px', height: '45px' }}
                        role="button"
                        title={user?.username}
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                    >
                        <span className='mx-auto text-transform-capitalize my-auto text-white fw-bold'>{user?.username[0]}</span>
                    </div>
                    
                    <UserSlide1 />
                </>
            }
          <a className="navbar-brand" href="#">Blog Now</a>
          

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {(props?.for ==="user") ?
              <a href="/hello">hello</a>
              :
              <NavLink />
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default TopBar