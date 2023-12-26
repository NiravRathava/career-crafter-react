import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthLayout from "../layout/authLayout";
import MainLayout from "../layout/mainLayout";

const LayoutRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/authentication/*" element={<AuthLayout />} />
          <Route path="/*" element={<MainLayout />} />
        </Routes>
      </Router>
    </div>
  );
};

export default LayoutRoutes;
