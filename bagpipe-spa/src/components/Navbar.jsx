import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Главная</Link>
      <Link to="/gallery">Галерея</Link>
      <Link to="/bagpipe">Волынка</Link>
      <Link to="/about">О проекте</Link>
    </nav>
  );
};

export default Navbar;
