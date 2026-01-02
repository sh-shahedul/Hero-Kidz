import ProductSkeleton from '@/components/skeleton/ProductSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div>
            <div className='grid md:grid-cols-4 gap-5'>
                {
                    [...Array(8)].map((_, index) =>(
                        <ProductSkeleton key={index}></ProductSkeleton>
                    ))
                }
            </div>
        </div>
    );
};

export default loading;
