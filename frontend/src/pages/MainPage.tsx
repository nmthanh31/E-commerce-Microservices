import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import NavBar from "../components/navigation/NavBar/Navbar";

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header /> {/* 👈 Thêm Header ở đây */}
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default MainPage;
