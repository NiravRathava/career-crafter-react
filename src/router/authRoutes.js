import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../views/signup/signup";

const AuthRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/authentication/signup" element={Signup}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default AuthRoutes;
