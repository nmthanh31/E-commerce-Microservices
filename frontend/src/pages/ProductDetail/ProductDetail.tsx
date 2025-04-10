import { useParams } from "react-router-dom";
import { listProducts } from "../../interfaces/CardProductProps";
import { renderRatingStars } from "../../utils/renderRatingStars";
import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";

const ProductDetail = () => {
  const { title } = useParams<{ title: string }>();
  const product = listProducts.find((p) => p.title === title);

  if (!product) {
    return (
      <div className="text-center text-gray-500 mt-10">
        Sản phẩm không tồn tại.
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          items={[
            { label: "Home", path: "/" },
            { label: "Shop", path: "/category" },
            { label: product.title },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          {/* Left: Image Preview */}
          <div className="flex gap-4">
            <div className="flex flex-col space-y-4">
              {[product.image, product.image, product.image].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="w-20 h-20 object-cover rounded-md border"
                />
              ))}
            </div>
            <div className="flex-1">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[530px] object-cover rounded-xl border shadow-md"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-extrabold text-black">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              {renderRatingStars(product.rating, "w-5 h-5 text-yellow-500")}
              <span className="text-black font-medium">
                {product.rating.toFixed(1)}/5
              </span>
            </div>

            {/* Price */}
            <div className="text-2xl font-semibold text-black">
              ${product.price.toFixed(0)}
              {product.discount && (
                <span className="ml-3 text-red-500 text-sm font-bold">
                  -{product.discount}%
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm">
              This graphic t-shirt is perfect for any occasion. Crafted from a
              soft and breathable fabric, it offers superior comfort and style.
            </p>

            {/* Color Select */}
            <div>
              <h3 className="text-sm text-black mb-1">Select Color</h3>
              <div className="flex gap-2">
                {["#6B665D", "#445569", "#626287"].map((color, i) => (
                  <button
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-black"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Size Select */}
            <div>
              <h3 className="text-sm text-black mb-1">Choose Size</h3>
              <div className="flex gap-3">
                {["Small", "Medium", "Large", "X-Large"].map((s, i) => (
                  <button
                    key={i}
                    className={`px-4 py-2 border text-sm font-medium rounded-md ${
                      s === "Large"
                        ? "bg-black text-white"
                        : "border-black text-black hover:bg-black hover:text-white"
                    } transition`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Button */}
            <div className="flex items-center gap-4 mt-4">
              <div className="flex border border-black rounded-md overflow-hidden">
                <button className="w-10 h-10 hover:bg-gray-100 text-black">
                  -
                </button>
                <input
                  type="number"
                  defaultValue="1"
                  min="1"
                  className="w-12 text-center border-x border-black outline-none"
                />
                <button className="w-10 h-10 hover:bg-gray-100 text-black">
                  +
                </button>
              </div>

              <button className="flex-1 bg-black text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-black hover:border hover:border-black transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Divider + Tabs Placeholder */}
        <div className="mt-16 border-t pt-10">
          <div className="flex gap-6 text-gray-400 text-sm font-medium mb-4">
            <span className="text-black border-b-2 border-black pb-2">
              Rating & Reviews
            </span>
            <span className="cursor-pointer">Product Details</span>
            <span className="cursor-pointer">FAQs</span>
          </div>

          {/* Review List */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-black">All Reviews</h2>
            <div className="flex items-center gap-2">
              <select className="text-sm border border-black rounded-md px-3 py-1">
                <option value="latest">Latest</option>
                <option value="top">Top Rated</option>
              </select>
              <button className="text-sm bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black transition">
                Write a Review
              </button>
            </div>
          </div>

          {/* Example Reviews */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                {renderRatingStars(5, "w-4 h-4 text-yellow-400")}
                <span className="font-semibold text-black">Samantha D.</span>
              </div>
              <p className="text-gray-600 text-sm">
                I absolutely love this t-shirt! The design is unique and the
                fabric feels so comfortable.
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Posted on August 14, 2023
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                {renderRatingStars(4, "w-4 h-4 text-yellow-400")}
                <span className="font-semibold text-black">Alex M.</span>
              </div>
              <p className="text-gray-600 text-sm">
                The shirt exceeded my expectations. The colors are vibrant and
                the fit is just right.
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Posted on August 15, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
