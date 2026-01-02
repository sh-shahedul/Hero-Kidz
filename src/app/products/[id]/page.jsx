// import { getSingelProduct } from '@/actions/server/product';
// import React from 'react';
// import Image from 'next/image';

// const ProductDetails = async ({ params }) => {
//   const { id } = await params;
//   const product = await getSingelProduct(id);

//   if (!product) {
//     return <div className="text-center py-10">Product not found</div>;
//   }

//   const {
//     title,
//     image,
//     price,
//     discount,
//     ratings,
//     reviews,
//     sold,
//     description,
//     info,
//     qna,
//   } = product;

//   const discountedPrice = price - (price * discount) / 100;

//   return (
//     <div className="max-w-6xl mx-auto py-8 px-4">
//       {/* Product Top Section */}
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Image */}
//         <div className="flex-1">
//           <Image
//             src={image}
//             alt={title}
//             width={500}
//             height={500}
//             className="rounded-xl object-cover w-full h-full"
//           />
//         </div>

//         {/* Product Info */}
//         <div className="flex-1 flex flex-col">
//           <h1 className="text-2xl md:text-3xl font-bold mb-2">{title}</h1>

//           <div className="flex items-center gap-4 mb-2">
//             <div className="flex items-center gap-1">
//               <span className="text-yellow-400 font-semibold">{ratings}</span>
//               <span>⭐</span>
//             </div>
//             <span className="text-gray-500 text-sm">({reviews} reviews)</span>
//             <span className="text-gray-500 text-sm">• {sold} Sold</span>
//           </div>

//           <div className="flex items-center gap-4 mb-4">
//             <span className="text-2xl font-bold text-primary">
//               ৳{discountedPrice.toFixed(2)}
//             </span>
//             {discount > 0 && (
//               <span className="line-through text-gray-400">
//                 ৳{price.toFixed(2)}
//               </span>
//             )}
//             {discount > 0 && (
//               <span className="text-sm text-red-500 font-semibold">
//                 {discount}% OFF
//               </span>
//             )}
//           </div>

//           <p className="text-gray-700 mb-4">{description}</p>

//           {/* Add to Cart & View Details */}
//           <div className="flex gap-3 mb-6">
//             <button className="btn btn-primary flex-1">Add to Cart</button>
//             <button className="btn btn-outline flex-1">Buy Now</button>
//           </div>

//           {/* Additional Info */}
//           {info && (
//             <div className="mb-4">
//               <h2 className="font-semibold mb-2">Product Info:</h2>
//               <p className="text-gray-700">{info}</p>
//             </div>
//           )}

//           {/* Q&A Section */}
//           {qna && qna.length > 0 && (
//             <div>
//               <h2 className="font-semibold mb-2">Q&A:</h2>
//               <ul className="space-y-2">
//                 {qna.map((item, index) => (
//                   <li key={index} className="text-gray-700">
//                     <strong>Q:</strong> {item.question} <br />
//                     <strong>A:</strong> {item.answer}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
import { getSingelProduct } from '@/actions/server/product';
import React from 'react';
import Image from 'next/image';

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = await getSingelProduct(id);

  if (!product) {
    return <div className="text-center py-10">Product not found</div>;
  }

  const {
    title,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
    description,
    info,
    qna,
  } = product;

  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      {/* Product Top Section - Image & Info Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Left: Image */}
        <div className="w-full">
          <div className="bg-gray-50 rounded-lg p-4 sticky top-4">
            <Image
              src={image}
              alt={title}
              width={600}
              height={600}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-3">{title}</h1>

          {/* Ratings & Reviews */}
          <div className="flex items-center gap-4 mb-4 pb-4 border-b">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">{ratings}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(ratings) ? "text-yellow-400" : "text-gray-300"}>
                    ⭐
                  </span>
                ))}
              </div>
            </div>
            <span className="text-gray-600">({reviews} Reviews)</span>
            <span className="text-gray-400">|</span>
            <span className="text-green-600 font-medium">{sold} Sold</span>
          </div>

          {/* Price Section */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-4xl font-bold text-orange-600">
                ৳{discountedPrice.toFixed(2)}
              </span>
              {discount > 0 && (
                <>
                  <span className="text-xl line-through text-gray-400">
                    ৳{price.toFixed(2)}
                  </span>
                  <span className="bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
                    -{discount}%
                  </span>
                </>
              )}
            </div>
            {discount > 0 && (
              <p className="text-sm text-gray-600">
                You save: ৳{(price - discountedPrice).toFixed(2)}
              </p>
            )}
          </div>

          {/* Additional Info */}
          {info && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-blue-900">Product Highlights</h3>
              <p className="text-gray-700 leading-relaxed">{info}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 mb-4">
            <button className="btn btn-primary flex-1 h-12 text-lg font-semibold">
              Add to Cart
            </button>
            <button className="btn btn-outline flex-1 h-12 text-lg font-semibold">
              Buy Now
            </button>
          </div>

          {/* Delivery & Return Info */}
          <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span>🚚</span>
              <span>Free Delivery Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span>↩️</span>
              <span>7 Days Return Policy</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💳</span>
              <span>Cash on Delivery Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section - Full Width Below */}
      <div className="mb-8">
        <div className="bg-white  rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b">Product Description</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{description}</p>
        </div>
      </div>

      {/* Q&A Section - Full Width Below */}
      {qna && qna.length > 0 && (
        <div>
          <div className="bg-white  rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b">Questions & Answers</h2>
            <div className="space-y-4">
              {qna.map((item, index) => (
                <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                  <div className="mb-2">
                    <span className="font-semibold text-gray-800">Q: </span>
                    <span className="text-gray-700">{item.question}</span>
                  </div>
                  <div className="pl-4 border-l-2 border-green-500">
                    <span className="font-semibold text-green-700">A: </span>
                    <span className="text-gray-700">{item.answer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;