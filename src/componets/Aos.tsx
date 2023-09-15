'use client'
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Aos = ({children, animation='fade-up'}:{children:any, animation:string}) => {
    React.useEffect(()=>{
      AOS.init({
        offset:100,
        duration:1000,
      });
    })
  return (
    <div data-aos={animation}>
        {children}
    </div>
  )
}

export default Aos