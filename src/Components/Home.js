import React from "react";
import ColumnPage from "./ColumnPage";
import Footer from "./Footer";
import Form from "./Form";
import MainPage from "./MainPage";
import Navbar from "./Navbar";
import Services from "./Services";
import Slider from "./Slider";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <MainPage />
      <ColumnPage />
      <Services />
      <Form />
      <Footer />
      <p className="text-center">&copy; Copyright 2022.Zinavo.com</p>
    </>
  );
};

export default Home;
