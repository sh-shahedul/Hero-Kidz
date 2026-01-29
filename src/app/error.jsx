"use client"
import Link from 'next/link';
import React from 'react';
import { BiSolidErrorAlt } from 'react-icons/bi';

const error = () => {
    return (
                <div className='flex flex-col justify-center items-center mt-30'>
           <BiSolidErrorAlt size={100}  className='text-primary mb-5'/> 
           <h2 className='text-4xl font-bold'>Something Error</h2>
           <Link href={'/'} className='btn btn-secondary mt-5'>Back To Home </Link>

        </div>
    );
};

export default error;