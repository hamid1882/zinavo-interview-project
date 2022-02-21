import React from "react";
import Carousel from "react-material-ui-carousel";
import sliderImage from "../Images/sliderImage.png";
import sliderImage2 from "../Images/sliderImage2.png";

const Slider = () => {
  return (
    <Carousel
      className="carouselStyles mb-5 container-fluid margin-auto h-100 "
      navButtonsAlwaysVisible="true"
    >
      <img src={sliderImage} className="CarouselImage" alt="slider" />
      <img src={sliderImage2} className="CarouselImage" alt="slider" />
      <img src={sliderImage} className="CarouselImage" alt="slider" />
    </Carousel>
  );
};

export default Slider;
