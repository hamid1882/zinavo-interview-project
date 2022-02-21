import React from "react";
import Carousel from "react-material-ui-carousel";
import sliderImage from "../Images/sliderImage.png";
import sliderImage2 from "../Images/sliderImage2.png";

const Slider = () => {
  return (
    <Carousel className="carouselStyles mb-5 h-100">
      <img src={sliderImage} alt="slider" />
      <img src={sliderImage2} alt="slider" />
      <img src={sliderImage} alt="slider" />
    </Carousel>
  );
};

export default Slider;
