import React, { useState } from "react";
import "../CSS/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import double from "../images/logo.svg"
const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)

  return (
    <div className="header">
      <div className="container">
        <img src={double} alt="w" />
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">New</a>
          </li>
          <li>
            <a href="/">Popular</a>
          </li>
          <li>
            <a href="/">Trending</a>
          </li>
          <li>
            <a href="/">Categories</a>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={40} style={{color: "#333", width: "100px"}}/>) : (<FaBars size={40} style={{color: "#333"}} />)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
