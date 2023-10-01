import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import PdpContent from "./PDPContent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
  <Router>
    <Routes>
      <Route path="/products/:id" element={
        <div className="text-3xl mx-auto max-w-6xl">
          <Header/>
          <div className="my-10">
            <PdpContent />
          </div>
          <Footer />
        </div>
      } />
    </Routes>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
