import { useEffect, useState, useMemo, useCallback } from "react";
import {
  CardProductProps,
  listProducts,
} from "../../interfaces/CardProductProps";
import FilterSection from "./components/FilterSection";
import CardProduct from "../../components/ui/CardProductComponent/CardProduct";

const PRODUCTS_PER_PAGE = 9;

interface CategoryProps {
  status?: "onsale" | "newarrival";
}

const Category = ({ status }: CategoryProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    let result = [...listProducts];

    // Filter by status
    if (status === "onsale") {
      result = result.filter((product) => product.discount);
    } else if (status === "newarrival") {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      result = result.filter((product) => {
        if (!product.publishedAt) return false;
        return new Date(product.publishedAt) >= thirtyDaysAgo;
      });
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    return result;
  }, [status, selectedCategory]);

  // Pagination logic
  const { displayedProducts, totalPages } = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return {
      displayedProducts: filteredProducts.slice(startIndex, endIndex),
      totalPages: Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE),
    };
  }, [filteredProducts, currentPage]);

  const handleCategorySelect = useCallback((category: string) => {
    setSelectedCategory((prev) => (prev === category ? "" : category));
    setCurrentPage(1);
  }, []);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [status, selectedCategory]);

  const categories = useMemo(() => {
    const uniqueCategories = new Set(listProducts.map((p) => p.category));
    return Array.from(uniqueCategories).filter(
      (category): category is string => category !== undefined
    );
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Sidebar */}
          <aside className="w-full md:w-1/4">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm sticky top-4">
              <h2 className="text-xl font-bold mb-4">Filters</h2>
              <FilterSection
                categories={categories}
                onCategorySelect={handleCategorySelect}
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">
                {selectedCategory || "All Products"}
                {status === "onsale" && " (On Sale)"}
                {status === "newarrival" && " (New Arrivals)"}
              </h1>
              <span className="text-gray-500">
                {filteredProducts.length} products
              </span>
            </div>

            {displayedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayedProducts.map((product) => {
                    return (
                      <CardProduct key={`${product.title}`} {...product} />
                    );
                  })}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-8 flex justify-center items-center space-x-2">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => p - 1)}
                      className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
                    >
                      Previous
                    </button>

                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }

                      return (
                        <button
                          key={pageNum}
                          className={`px-4 py-2 rounded ${
                            currentPage === pageNum
                              ? "bg-blue-600 text-white"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                          onClick={() => setCurrentPage(pageNum)}
                        >
                          {pageNum}
                        </button>
                      );
                    })}

                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((p) => p + 1)}
                      className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500 text-lg mb-4">No products found</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Category;
