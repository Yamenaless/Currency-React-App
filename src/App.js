import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Developers from "./components/Developers";
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Developers/>
    </div>
  );
}

export default App;
