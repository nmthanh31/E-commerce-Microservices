import { useState } from "react";
import {
  CardProductProps,
  listProducts,
} from "../../interfaces/CardProductProps";
import FilterSection from "./components/FilterSection";
import CardProduct from "../../components/ui/CardProductComponent/CardProduct";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const productsPerPage = 9;

  // Lọc theo category (nếu có)
  const filteredProducts = selectedCategory
    ? listProducts.filter((product) => product.category === selectedCategory)
    : listProducts;

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  // Khi đổi category thì về trang 1
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg shadow-sm">
            <div className="flex ư-full">
              <h2 className="text-xl font-bold mb-4">Filters</h2>
            </div>
            {/* Filter content goes here */}
            <div className="space-y-4">
              <FilterSection
                categories={["t-shirt", "jean", "shirt", "polo", "short"]}
                onCategorySelect={handleCategorySelect}
              />
            </div>
          </div>

          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">
                {selectedCategory == "" ? "Products" : selectedCategory}
              </h1>
              {/* <SortDropdown /> */}
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProducts.map((product) => (
                <CardProduct key={product.title} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={`px-4 py-2 rounded ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
