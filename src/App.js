import React from "react";
import FeaturePage from "./page/FeaturePage/FeaturePage";
import OrderPage from "./page/OrderPage/OrderPage";
import HomePage from "./page/HomePage/HomePage";
import Contact from "./page/contactPage/Contact";
import SignUp from "./page/SignUpPage/SignUp";
import Login from "./page/LoginPage/Login";

import { Routes, Route } from "react-router-dom";
import About from "./page/aboutUsPage/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/FeaturePage" element={<FeaturePage />} />
        <Route path="/OrderPage" element={<OrderPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
