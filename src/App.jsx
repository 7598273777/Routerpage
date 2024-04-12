import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import All from "./Pages/All";
import DataScience from "./Pages/DataScience";
import CyberSecurity from "./Pages/CyberSecurity";
import FullStackDev from "./Pages/FullStackDev";
import Career from "./Pages/Career";
import "./App.css";


function App() {
  return (
    <div>
      <div className="Heading">
        <Link to={"/"}>All</Link>
        <span className="separator"> </span>
        <Link to={"/DataScience"}>DataScience</Link>
        <span className="separator"> </span>
        <Link to={"/cybersecurity"}>CyberSecurity</Link>
        <span className="separator"> </span>
        <Link to={"/FullStackDev"}>FullStackDevelopment</Link>
        <span className="separator"> </span>
        <Link to={"/career"}>Career</Link>
        
      </div>
      <Routes>
        <Route Component={All} path="/" />
        <Route Component={DataScience} path="/dataScience" />
        <Route Component={CyberSecurity} path="/cyberSecurity" />
        <Route Component={FullStackDev} path="/FullstackDev" />
        <Route Component={Career} path="/career" />
      </Routes>
    </div>
  );
}

export default App;
