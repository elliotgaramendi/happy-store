import { Route, Routes } from "react-router";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="products" element={<h1>Products</h1>} />
      <Route path="promotions" element={<h1>Promotions</h1>} />
      <Route path="contact" element={<h1>Contact</h1>} />
    </Routes>
  );
};

export default AppRoutes;