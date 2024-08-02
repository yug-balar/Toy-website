import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/home/Layout";
import Products from "./pages/Products";
import Marvel from "./layout/products/Marvel";
import Expensive from "./layout/products/Expensive";
import Kid from "./layout/products/Kid";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Reviews from "./componants/Reviews/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<Products />} />
            <Route path="Marvel" element={<Marvel />} />
            <Route path="Expensive" element={<Expensive />} />
            <Route path="Kid" element={<Kid />} />
          </Route>
          <Route path="About" element={<About />} />
          <Route path="Reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
