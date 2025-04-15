import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      <main>{children}</main>
      <Outlet />
    </div>
  );
};

export default Layout;
