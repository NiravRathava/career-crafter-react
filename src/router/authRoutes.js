import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../views/signup/signup";

const AuthRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default AuthRoutes;
