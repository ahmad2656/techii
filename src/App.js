import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./HomeComp/Home";
import About from "./AboutComp/About";
import Service from "./ServiceComp/Service";
import Page from "./PageComp/Page";
import Contact from "./ContactComp/Contact";
import Navbar from "./Navbar/Navbar";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Service />} />
          <Route path="/Pages" element={<Page />} />
          <Route path="/Contact us" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
