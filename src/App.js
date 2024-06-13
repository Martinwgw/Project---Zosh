import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Main pages/Homepage";
import RuggedProducts from "./Main pages/RuggedProducts";
import Simulator from "./Main pages/Simulator";
import Testjig from "./Main pages/Testjig";
import ATE from "./Main pages/ATE";
import ETS from "./Main pages/ETS";
import Antenna from "./Main pages/Antenna";
import Solution from "./Main pages/Solution";
import Suppliers from "./Main pages/Suppliers";
import Contact from "./Main pages/Contact";
import News1 from "./Main pages/News1";

import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider1 from "./components/Slider1";
// import News from "./components/News";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/rugged" element={<RuggedProducts />} />
        <Route path="/simulator" element={<Simulator />} />
        <Route path="/testjig" element={<Testjig />} />
        <Route path="/ate" element={<ATE />} />
        <Route path="/ets" element={<ETS />} />
        <Route path="/antenna" element={<Antenna />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News1 />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/header" element={<Header />} /> 
        <Route path="/footer" element={<Footer />} /> 
        <Route path="/slider" element={<Slider1 />} /> 
        {/* <Route path="/news" element={<News />} />   */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
