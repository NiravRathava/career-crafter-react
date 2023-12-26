import React from "react";

import MainRoutes from "../router/mainRoutes";
import Navbar from "../component/Navbar";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <MainRoutes />
    </div>
  );
};
export default MainLayout;
