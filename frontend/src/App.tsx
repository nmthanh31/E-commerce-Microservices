// App.js
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainPage from "./pages/MainPage";
import Category from "./pages/Category/Category";
import ProductDettail from "./pages/ProductDetail/ProductDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={""} />

        {/* Protected routes with Navbar */}
        <Route element={<MainPage />}>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/onsale" element={<Category status="onsale"/>} />
          <Route path="/newarrival" element={<Category status="newarrival"/>} />
          <Route path="/cart" element={""} />
          <Route path="/product/:title" element={<ProductDettail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
