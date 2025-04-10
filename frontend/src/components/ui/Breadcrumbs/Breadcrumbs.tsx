import { Link } from "react-router-dom";
import { FaChevronRight, FaHome } from "react-icons/fa";

interface BreadcrumbsProps {
  items: { label: string; path?: string }[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="bg-transparent py-6 px-4 sm:px-6">
      <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-1 sm:space-x-2">
          <li>
            <Link
              to="/"
              className="text-gray-500 hover:text-gray-800 transition-colors "
            >
              <FaHome className="w-4 h-4" />
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <FaChevronRight className="mx-2 text-gray-400 text-xs" />
              {item.path ? (
                <Link
                  to={item.path}
                  className="transition-colors hover:text-gray-800 hover:font-semibold"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-800 font-semibold">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
