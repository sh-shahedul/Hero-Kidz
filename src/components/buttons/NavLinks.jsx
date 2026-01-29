"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

const NavLinks = ({href,children}) => {
    

      const path = usePathname()
     const active  =   href === "/" ? path === "/" : path.startsWith(href)



    return (
        <div>
          <Link className={`${active?  "text-primary" : ""} font-medium`} href={href}> {children}</Link>   
        </div>
    );
};

export default NavLinks;