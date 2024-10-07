import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects"
import MainSection from "./components/MainSection";
import About from "./components/About";
import Cards from "./components/Cards";

// Routes handling 
function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/mainSection" element={<MainSection />} />
            <Route path="/card" element={<Cards />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
