import Footer from "../../components/layout/Footer/Footer";
import Banner from "./components/Banner/Banner";

const Home = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Banner />
      <main className="flex-grow container mx-auto px-4 py-8"></main>
      <Footer />
    </div>
  );
};

export default Home;
