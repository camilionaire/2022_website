import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/" exact element={<Education />} />
          <Route path="/" exact element={<Projects />} />
          <Route path="/" exact element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
