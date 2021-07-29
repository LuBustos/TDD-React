import React from "react";
import logo from "../../logo.svg";
import Buttons from "./buttons";

const Header = () => {
  return (
    <div>
      <nav
        aria-label="navbar"
        className="py-3 border-bottom navbar navbar-expand navbar-light"
      >
        <a href="/#">
          <img src={logo} width="40" alt="" />
        </a>
        <form aria-label="search" className="mr-auto w-50 form-inline">
          <input
            placeholder="Search homes"
            type="text"
            className="w-50 form-control"
            id="search-id"
          />
        </form>
        <div aria-label="options" className="ml-auto text-uppercase navbar-nav">
          <a href="#home" className="nav-link">
            Become a host
          </a>
          <a href="#link" className="nav-link">
            Help
          </a>
          <a href="#link" className="nav-link">
            Sing up
          </a>
          <a href="#link" className="nav-link">
            Login
          </a>
        </div>
      </nav>
      <Buttons />
    </div>
  );
};

export default Header;
