import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import {Travel, Lifestyle, Business, Food, Work} from "./components/Pages"
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Travel" element={<Travel />} />
        <Route path="/Lifestyle" element={<Lifestyle />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
