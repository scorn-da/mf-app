import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "remixicon/fonts/remixicon.css";

import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import PdpContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";

const MainLayout = () => (
  <Router>
    <Routes>
      <Route index element={
        <div className="text-3xl mx-auto max-w-6xl">
          <Header />
          <div className="my-10">
            <HomeContent />
          </div>
          <Footer />
        </div>
      } />
      <Route path="/products/:id" element={
        <div className="text-3xl mx-auto max-w-6xl">
          <Header />
          <div className="my-10">
            <PdpContent />
          </div>
          <Footer />
        </div>
      } />
      <Route path="/cart" element={
        <div className="text-3xl mx-auto max-w-6xl">
          <Header />
          <div className="my-10">
            <CartContent />
          </div>
          <Footer />
        </div>
      } />
    </Routes>
  </Router>
);

export default MainLayout