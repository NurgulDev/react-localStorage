import React from "react";
import logo from "../image/image 2.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <div className="header-img">
            <img src={logo} alt="" />
          </div>
          <div className="header-a">
            <Link to='/menu' >
              <a href="#">Menu</a>
            </Link>

            <Link to='/order'>
              <a href="#">Orders</a>
            </Link>

            <Link to='/admin'>
              <a href="#">Admin</a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
