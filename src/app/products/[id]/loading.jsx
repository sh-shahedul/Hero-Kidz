const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 animate-pulse">
      {/* Product Top Section - Image & Info Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Left: Image Skeleton */}
        <div className="w-full">
          <div className="bg-gray-200 rounded-lg p-4">
            <div className="skeleton h-[500px] w-full rounded-lg bg-gray-300"></div>
          </div>
        </div>

        {/* Right: Product Info Skeleton */}
        <div className="flex flex-col space-y-4">
          {/* Title Skeleton */}
          <div className="skeleton h-8 w-3/4 bg-gray-300 rounded"></div>

          {/* Ratings & Reviews Skeleton */}
          <div className="flex items-center gap-4 pb-4 border-b">
            <div className="skeleton h-6 w-24 bg-gray-300 rounded"></div>
            <div className="skeleton h-6 w-32 bg-gray-300 rounded"></div>
            <div className="skeleton h-6 w-20 bg-gray-300 rounded"></div>
          </div>

          {/* Price Section Skeleton */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-3">
              <div className="skeleton h-10 w-40 bg-gray-300 rounded"></div>
              <div className="skeleton h-6 w-24 bg-gray-300 rounded"></div>
              <div className="skeleton h-6 w-16 bg-gray-300 rounded"></div>
            </div>
            <div className="skeleton h-4 w-32 bg-gray-300 rounded"></div>
          </div>

          {/* Product Highlights Skeleton */}
          <div className="p-4 bg-blue-50 rounded-lg space-y-2">
            <div className="skeleton h-6 w-40 bg-gray-300 rounded"></div>
            <div className="skeleton h-4 w-full bg-gray-300 rounded"></div>
            <div className="skeleton h-4 w-5/6 bg-gray-300 rounded"></div>
          </div>

          {/* Action Buttons Skeleton */}
          <div className="flex gap-3">
            <div className="skeleton h-12 flex-1 bg-gray-300 rounded"></div>
            <div className="skeleton h-12 flex-1 bg-gray-300 rounded"></div>
          </div>

          {/* Delivery Info Skeleton */}
          <div className="border-t pt-4 space-y-2">
            <div className="skeleton h-5 w-48 bg-gray-300 rounded"></div>
            <div className="skeleton h-5 w-40 bg-gray-300 rounded"></div>
            <div className="skeleton h-5 w-52 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>

      {/* Description Section Skeleton */}
      <div className="mb-8">
        <div className="bg-white border rounded-lg p-6 space-y-4">
          <div className="skeleton h-7 w-48 bg-gray-300 rounded mb-4"></div>
          <div className="skeleton h-4 w-full bg-gray-300 rounded"></div>
          <div className="skeleton h-4 w-full bg-gray-300 rounded"></div>
          <div className="skeleton h-4 w-4/5 bg-gray-300 rounded"></div>
          <div className="skeleton h-4 w-full bg-gray-300 rounded"></div>
          <div className="skeleton h-4 w-3/4 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Q&A Section Skeleton */}
      <div>
        <div className="bg-white border rounded-lg p-6 space-y-4">
          <div className="skeleton h-7 w-56 bg-gray-300 rounded mb-4"></div>
          
          {/* Q&A Item 1 */}
          <div className="border-b pb-4 space-y-2">
            <div className="skeleton h-4 w-full bg-gray-300 rounded"></div>
            <div className="pl-4 border-l-2 border-gray-300">
              <div className="skeleton h-4 w-5/6 bg-gray-300 rounded"></div>
            </div>
          </div>

          {/* Q&A Item 2 */}
          <div className="border-b pb-4 space-y-2">
            <div className="skeleton h-4 w-4/5 bg-gray-300 rounded"></div>
            <div className="pl-4 border-l-2 border-gray-300">
              <div className="skeleton h-4 w-full bg-gray-300 rounded"></div>
            </div>
          </div>

          {/* Q&A Item 3 */}
          <div className="space-y-2">
            <div className="skeleton h-4 w-11/12 bg-gray-300 rounded"></div>
            <div className="pl-4 border-l-2 border-gray-300">
              <div className="skeleton h-4 w-4/5 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;