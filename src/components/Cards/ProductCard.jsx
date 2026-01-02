// import Image from 'next/image';
// import React from 'react';

// const ProductCard = ({product}) => {
//     return (
//         <div className="card bg-base-100 shadow-xl h-[420px]">
//   <figure className="px-4 pt-4">
//     <Image
//       src={product.image}
//       alt={product.title}
//       width={300}
//       height={200}
//       className="rounded-xl h-48 object-cover"
//     />
//   </figure>

//   <div className="card-body p-4 flex flex-col">
//     <h2 className="card-title text-base line-clamp-2">
//       {product.title}
//     </h2>

//     <div className="flex items-center gap-2 text-sm">
//       <div className="rating rating-sm">
//         <input type="radio" className="mask mask-star-2 bg-orange-400" />
//         <input type="radio" className="mask mask-star-2 bg-orange-400" />
//         <input type="radio" className="mask mask-star-2 bg-orange-400" />
//         <input type="radio" className="mask mask-star-2 bg-orange-400" />
//         <input type="radio" className="mask mask-star-2 bg-orange-400" />
//       </div>
//       <span>(4.8)</span>
//     </div>

//     <p className="text-sm text-gray-500">
//       120 Reviews • 450 Sold
//     </p>

//     <div className="flex items-center gap-2 mt-2">
//       <span className="text-lg font-bold text-primary">
//         ৳{product.price}
//       </span>
//       <span className="line-through text-sm text-gray-400">
//         ৳{product.price + 200}
//       </span>
//     </div>

//     <div className="card-actions mt-auto">
//       <button className="btn btn-primary btn-sm w-full">
//         Add to Cart
//       </button>
//     </div>
//   </div>
// </div>

//     );
// };

// export default ProductCard;
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-xl h-[420px]">
      <figure className="px-4 pt-4">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={200}
          className="rounded-xl h-48 object-cover"
        />
      </figure>

      <div className="card-body p-4 flex flex-col">
        <h2 className="card-title text-base line-clamp-2">
          {product.title}
        </h2>

        <div className="flex items-center gap-2 text-sm">
          <div className="rating rating-sm">
            <input type="radio" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" className="mask mask-star-2 bg-orange-400" />
          </div>
          <span>(4.8)</span>
        </div>

        <p className="text-sm text-gray-500">
          120 Reviews • 450 Sold
        </p>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-primary">
            ৳{product.price}
          </span>
          <span className="line-through text-sm text-gray-400">
            ৳{product.price + 200}
          </span>
        </div>

        <div className="card-actions mt-auto flex gap-2">
          <button className="btn btn-primary btn-sm flex-1">
            Add to Cart
          </button>
          <Link href={`/products/${product?._id}`} className="btn btn-primary btn-sm btn-outline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
