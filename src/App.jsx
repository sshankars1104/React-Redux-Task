import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import React from 'react'
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import NoPage from "./components/NoPage/NoPage";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App