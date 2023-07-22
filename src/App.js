import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TestimonialSection from "./components/TestimonialSection";
import ImageSlider from "./components/ImageSlider";


function App() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <TestimonialSection/>
      <ImageSlider/>
      {/* Your other components or content here */}
    </div>
  );
}

export default App;
