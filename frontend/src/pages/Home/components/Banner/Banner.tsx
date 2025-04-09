import { Link } from "react-router-dom";

const Banner = () => {
  const list = [
    {
      count: "200",
      title: "International Brands",
    },
    {
      count: "2,000",
      title: "High-Quality Products",
    },
    {
      count: "30,000",
      title: "Happy Customers",
    },
  ];

  const brands = [
    "/images/versace.png",
    "/images/zara.png",
    "/images/gucci.png",
    "/images/prada.png",
    "/images/calvinklein.png",
  ];

  return (
    <div className="banner relative w-full h-[800px] overflow-hidden">
      {/* Full-screen banner image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="/images/banner.png"
          alt="Fashion Banner"
        />
      </div>

      {/* Content aligned with container */}
      <div className="container mx-auto h-full relative z-10 px-4">
        <div className="absolute inset-y-0 left-4 md:left-0 flex items-center w-full md:w-[30%]">
          <div className="bg-transparent">
            <h2 className="text-black text-3xl md:text-5xl font-extrabold py-3">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h2>
            <p className="text-xs md:text-sm pb-6 md:pb-10">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individual and cater to your sense of
              the style
            </p> 
            <button className="w-[160px] md:w-[211px] h-[44px] md:h-[52px] bg-black text-white rounded-3xl flex items-center justify-center hover:bg-gray-600 hover:cursor-pointer ">
              <p>Shop Now</p>
            </button>

            <div className="flex justify-between items-center pt-8 md:pt-15 space-x-4">
              {list.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-start justify-center ${
                    index !== list.length - 1
                      ? "border-r border-gray-300 pr-4 md:pr-8"
                      : ""
                  }`}
                >
                  <h1 className="text-2xl md:text-4xl font-bold text-black">
                    {item.count}+
                  </h1>
                  <p className="text-xs text-gray-600">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brand logos strip at bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-black py-4 z-20 overflow-x-auto">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center min-w-max">
            {brands.map((brand, index) => (
              <Link
                to="#"
                key={index}
                className="flex items-center justify-center px-2 md:px-4"
              >
                <img
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className="h-8 md:h-10 object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
