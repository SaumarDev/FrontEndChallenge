import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container text-center">
      <p className="slogan-home">&#91; Making your Life Easier &#93;</p>
      <h1 className="fw-bold"> Discovering the World </h1>
      <ul class="nav justify-content-center">
        <li class="nav-item element-nav">
          <Link to="/">Home</Link>
        </li>
        <li class="nav-item element-nav">
          <Link to="/Travel">Travel</Link>
        </li>
        <li class="nav-item element-nav">
          <Link to="/Lifestyle">Lifestyle</Link>
        </li>
        <li class="nav-item element-nav">
        <Link to="/Business">Business</Link>
        </li>
        <li class="nav-item element-nav">
        <Link to="/Food">Food</Link>
        </li>
        <li class="nav-item element-nav">
        <Link to="/Work">Work</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
