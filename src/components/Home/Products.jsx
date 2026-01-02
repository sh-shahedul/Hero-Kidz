import Image from "next/image";
import products from "@/data/toys.json";
import ProductCard from "../Cards/ProductCard";

const Products = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Heading */}
      <h1 className="text-4xl text-center font-bold mb-3">
        Our <span className="text-primary">Products</span>
      </h1>
      <p className="font-medium text-center mb-10">
        Discover a wide range of fun, safe, and educational toys.
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.title} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;

