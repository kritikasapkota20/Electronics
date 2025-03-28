import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Home />} />
        <Route path="/product/:productId" element={<Home />} />
        <Route path="/featured" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/deals" element={<Home />} />
        <Route path="/shop-by-category" element={<Home />} />
        <Route path="/collections" element={<Home />} />
        <Route path="/blog" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
