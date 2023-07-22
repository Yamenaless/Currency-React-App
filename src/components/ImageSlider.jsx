import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const images = [
    "https://source.unsplash.com/1200x600/?nature",
    "https://source.unsplash.com/1200x600/?landscape",
    "https://source.unsplash.com/1200x600/?architecture",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((imageUrl, index) => (
        <div className="outline-none" key={index}>
          <img src={imageUrl} alt={`Slide ${index + 1}`} className="mx-auto" />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
