// src/components/layout/Footer.jsx
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black pt-12 pb-6">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h1 className="text-5xl font-bold mb-4">SHOP.CO</h1>
            <p className="text-gray-600 mb-4">
              Chuyên cung cấp sản phẩm thời trang chất lượng với giá cả hợp lý.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              {["Trang chủ", "Sản phẩm", "Giới thiệu", "Liên hệ"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black transition-colors duration-200 block"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hỗ trợ khách hàng</h3>
            <ul className="space-y-2">
              {[
                "Chính sách đổi trả",
                "Hướng dẫn mua hàng",
                "Câu hỏi thường gặp",
                "Bảo mật thông tin",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black transition-colors duration-200 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liên hệ</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg
                  className="flex-shrink-0 w-5 h-5 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>123 Đường ABC, Quận 1, TP.HCM</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="flex-shrink-0 w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>(+84) 123 456 789</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="flex-shrink-0 w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>contact@example.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SHOP.CO. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {["Điều khoản dịch vụ", "Chính sách bảo mật", "Sitemap"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-black text-sm transition-colors duration-200"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
