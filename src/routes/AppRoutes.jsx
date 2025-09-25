import { Route, Routes } from "react-router";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="products" element={<h1>Products</h1>} />
      <Route path="promotions" element={<h1>Promotions</h1>} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;