import { FaChevronRight } from "react-icons/fa6";
import { useState } from "react";

interface FilterSectionProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

const FilterSection = ({
  categories,
  onCategorySelect,
}: FilterSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategoryClick = (category: string) => {
    const newSelected = selectedCategory === category ? "" : category;
    setSelectedCategory(newSelected);
    onCategorySelect(newSelected || "");
  };

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-sm">
      {/* Category Section */}
      <div className="mb-8">
        {categories.map((category) => (
          <div
            key={category}
            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
              selectedCategory === category
                ? "bg-blue-50 text-blue-600"
                : "hover:bg-gray-50 text-gray-700"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            <span className="capitalize font-medium text-gray-500">
              {category}
            </span>
            <FaChevronRight
              className={`transition-transform ${
                selectedCategory === category
                  ? "text-blue-500"
                  : "text-gray-400"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
