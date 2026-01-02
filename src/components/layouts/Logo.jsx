import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div className='flex items-center gap-3'>
            <Link href={'/'}>
             <Image alt='logo-hero-kidz' src={"/assets/logo.png"} width={50} height={40}></Image>
            </Link>
            <h2 className=' text-xl font-bold'> Hero <span className='text-primary'>Kidz</span></h2>
        </div>
    );
};

export default Logo;