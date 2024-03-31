import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// self
import "./styles/style.css";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Homepage from "./pages/Homepage.js";
import About from "./pages/About.js";

const App = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [currentSearch, setCurrentSearch] = useState("");

  return (
    <div>
      <Nav setIsSearch={setIsSearch} setCurrentSearch={setCurrentSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              isSearch={isSearch}
              setIsSearch={setIsSearch}
              currentSearch={currentSearch}
              setCurrentSearch={setCurrentSearch}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
