import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <HeaderWrapper />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function HeaderWrapper() {
  const location = useLocation();
  const { pathname } = location;
  const isHomepage = pathname === "/";

  return isHomepage ? (
    <Header style={{ background: "transparent", top: "30px" }} location={location} />
  ) : (
    <Header
      style={{ background: "black", top: "" }}
      hideFirstDiv={true}
      logoHeight={true}
      location={location}
    />
  );
}

export default App;
