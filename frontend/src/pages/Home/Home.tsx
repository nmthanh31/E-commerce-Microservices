import Footer from "../../components/layout/Footer/Footer";
import CardProduct from "../../components/ui/CardProductComponent/CardProduct";
import { CardProductProps } from "../../interfaces/CardProductProps";
import Banner from "./components/Banner/Banner";

const Home = () => {
  const listProducts: CardProductProps[] = [
    {
      title: "T-shirt with Tape Details",
      price: 120,
      image: "/images/T-shirt.png",
      rating: 4.5,
      discount: 20,
      onAddToCart: () => console.log("Added to cart"),
    },
    {
      title: "T-shirt with Tape Details",
      price: 120,
      image: "/images/T-shirt.png",
      rating: 4.5,
      discount: 20,
      onAddToCart: () => console.log("Added to cart"),
    },
    {
      title: "T-shirt with Tape Details",
      price: 120,
      image: "/images/T-shirt.png",
      rating: 4.5,
      discount: 20,
      onAddToCart: () => console.log("Added to cart"),
    },
    {
      title: "T-shirt with Tape Details",
      price: 120,
      image: "/images/T-shirt.png",
      rating: 4.5,
      discount: 20,
      onAddToCart: () => console.log("Added to cart"),
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Banner />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="w-full pt-30 pb-20 border-b-2 border-gray-300">
          <div className="w-full flex justify-center items-center">
            <h1 className="text-black font-extrabold text-5xl">NEW ARRIVALS</h1>
          </div>
          <div className="w-full flex justify-between items-center pt-10 pb-10 ">
            {listProducts.map((product, index) => (
              <CardProduct key={index} {...product} />
            ))}
          </div>
          <div className="w-full flex justify-center items-center pt-10">
            <button
              className="
    bg-white 
    border border-gray-300 
    rounded-3xl 
    px-6 py-3 
    w-40 
    text-lg font-semibold 
    text-gray-800
    hover:bg-gray-50 
    hover:border-gray-400
    active:bg-gray-100
    active:scale-95
    transition-all 
    duration-200
    shadow-sm
    hover:shadow-md
    focus:outline-none 
    focus:ring-2 
    focus:ring-gray-400 
    focus:ring-opacity-50
    hover:cursor-pointer
  "
            >
              View All
            </button>
          </div>
        </div>

        <div className="w-full pt-30">
          <div className="w-full flex justify-center items-center">
            <h1 className="text-black font-extrabold text-5xl">TOP SELLING</h1>
          </div>
          <div className="w-full flex justify-between items-center pt-10 pb-10 ">
            {listProducts.map((product, index) => (
              <CardProduct key={index} {...product} />
            ))}
          </div>

          <div className="w-full flex justify-center items-center pt-10">
            <button
              className="
    bg-white 
    border border-gray-300 
    rounded-3xl 
    px-6 py-3 
    w-40 
    text-lg font-semibold 
    text-gray-800
    hover:bg-gray-50 
    hover:border-gray-400
    active:bg-gray-100
    active:scale-95
    transition-all 
    duration-200
    shadow-sm
    hover:shadow-md
    focus:outline-none 
    focus:ring-2 
    focus:ring-gray-400 
    focus:ring-opacity-50
    hover:cursor-pointer
  "
            >
              View All
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
