import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="container text-center">
      <div class="row row-cols-6">
        <div class="col"><Link to="/">Home</Link></div>
        <div class="col"><Link to="/Travel">Travel</Link></div>
        <div class="col"><Link to="/Lifestyle">Lifestyle</Link></div>
        <div class="col"><Link to="/Business">Business</Link></div>
        <div class="col"><Link to="/Food">Food</Link></div>
        <div class="col"><Link to="/Work">Work</Link></div>
      </div>
    </div>
  );
};


export default Navbar;
