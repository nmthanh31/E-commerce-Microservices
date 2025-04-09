import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-gray-200 py-4">
      <p className="text-center text-sm">
        {" "}
        Đăng ký để nhận giảm giá 10% cho đơn hàng đầu tiên của bạn! <Link to="/register" className="text-white underline ">Đăng ký ngay</Link>
      </p>
    </header>
  );
};


export default Header;