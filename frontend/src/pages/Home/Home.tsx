import Footer from "../../components/layout/Footer/Footer";
import CardProduct from "../../components/ui/CardProductComponent/CardProduct";
import Banner from "./components/Banner/Banner";

const Home = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Banner />
      <main className="flex-grow container mx-auto px-4 py-8">
        <CardProduct
          title="T-shirt with Tape Details"
          price={120}
          image="/images/T-shirt.png"
          rating={4.5}
          discount={20}
          onAddToCart={() => console.log("Added to cart")} // Optional
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
