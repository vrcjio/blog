'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

import React from 'react'

const NavLink = () => {
    const path = usePathname();
    const links = {
        title:['Home','About','Sign In'],
        link:['/', '/About', '/signIn']
    }
    return (
        <span className="navbar-nav me-auto mb-2 mb-lg-0">
            {
                links.title.map((title, index)=>{
                    return(
                            <Link key={index} className={`fw-bold nav-link ${path===links.link[index] && 'text-warning'}`} href={links.link[index]}>{title}</Link>
                       
                    )
                })
            }

        </span>
    )
}

export default NavLink