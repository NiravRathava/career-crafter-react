import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../views/signup/signup";

const LayoutRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/authentication/signup" Component={Signup}></Route>
          <Route path="/"></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default LayoutRoutes;
