import Link from 'next/link';
import React from 'react';
import Aos from './Aos';

export default function Footer {
  return (
    <>
      <Aos animation='fade-up'>
        <div className='fluid-container bg-light p-3 tw-bold mt-3'>
          <div className='row border-bottom pb-3'>
            <div className='col text-capitalize text-center border-end'>
              <ul style={{ listStyle: 'none' }}>
                <li><span className='fs-5 text-warning text-decoration-underline'>Help</span></li>
                <li><Link href="#" className='text-secondary nav-link'>Help Center</Link></li>
                <li><Link href="#" className='text-secondary nav-link'>Help Forum</Link></li>
                <li><Link href="#" className='text-secondary nav-link'>Tutorial</Link></li>
              </ul>
            </div>
            <div className='col text-capitalize text-center border-end'>
              <ul style={{ listStyle: 'none' }}>
                <li><span className='fs-5 text-warning text-decoration-underline'>Community</span></li>
                <li><Link href="#" className='text-secondary nav-link'>Blogger Buzz</Link></li>
              </ul>
            </div>
            <div className='col text-capitalize text-center border-end'>
              <ul style={{ listStyle: 'none' }}>
                <li><span className='fs-5 text-warning text-decoration-underline'>Developers</span></li>
                <li><Link href="#" className='text-secondary nav-link'>Blogger API</Link></li>
                <li><Link href="#" className='text-secondary nav-link'>Devlopers Forum</Link></li>
              </ul>
            </div>
          </div>

          <div className='row'>
            <div className='col text-capitalize text-center justify-content-center d-flex flex-wrap'>
              <Link href="#" className='text-secondary nav-link border-end'>Terms of Service</Link>
              <Link href="#" className='text-secondary nav-link border-end'>Privacy</Link>
              <Link href="#" className='text-secondary nav-link'>Content policy</Link>
            </div>
          </div>
        </div>
      </Aos>
    </>
  )
}
