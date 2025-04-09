import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      <div className="mx-auto container h-20">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex shrink-0 items-center">
              <h1 className="text-black text-5xl font-bold">SHOP.CO</h1>
            </Link>
          </div>

          <div className="hidden sm:flex items-center space-x-4">
            <Link
              to="/category"
              className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
            >
              Shop
            </Link>
            <Link
              to=""
              className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
            >
              On Sale
            </Link>
            <Link
              to=""
              className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
            >
              New Arrivals
            </Link>
          </div>

          <div className="hidden sm:block flex-1 max-w-3xl px-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-black"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full bg-gray-200 border border-transparent rounded-4xl py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-black focus:ring-white focus:text-black sm:text-sm"
                placeholder="Search products..."
              />
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative rounded-full p-1 text-black hover:text-gray-600 focus:outline-none transition-colors duration-200"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View cart</span>
              <FaShoppingCart className="h-6 w-6" aria-hidden="true" />
            </Link>

            <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex rounded-full focus:outline-none">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <FaCircleUser className="h-6 w-6" aria-hidden="true" />
              </MenuButton>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem>
                  {({ focus }) => (
                    <Link
                      to="/profile"
                      className={`block px-4 py-2 text-sm text-gray-700 ${
                        focus ? "bg-gray-100" : ""
                      }`}
                    >
                      Your Profile
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <Link
                      to="#"
                      className={`block px-4 py-2 text-sm text-gray-700 ${
                        focus ? "bg-gray-100" : ""
                      }`}
                    >
                      Sign out
                    </Link>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default NavBar;
