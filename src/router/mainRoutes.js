import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/home/home"

const MainRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
