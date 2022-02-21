import React from "react";
import About from "../Images/about.png";
import Vision from "../Images/vision.png";

const ColumnPage = () => {
  return (
    <div className="container m-auto text-center my-5">
      <h3 className="text-black">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        iusto provident sit cupiditate beatae quidem accusantium commodi, unde
        id? Pariatur tempore rerum numquam ipsam, quia facilis molestias
        perferendis quae officia!
      </h3>
      <h1 className="fw-1 p-3">About Us</h1>
      <div className="d-flex align-items-center gap-3 text-start my-3">
        <img src={About} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime
          aperiam dolorem, qui rerum mollitia. Ipsam voluptatem dolor laborum
          quia adipisci. Atque deserunt, ad autem dolor quasi enim ipsa impedit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime
          aperiam dolorem, qui rerum mollitia. Ipsam voluptatem dolor laborum
          quia adipisci. Atque des
        </p>
      </div>
      <div className="d-flex align-items-center gap-3 my-3">
        <div className="text-start">
          <h3 className="text-dark text-start ">OUR VISION</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime
            aperiam dolorem, qui rerum mollitia. Ipsam voluptatem dolor laborum
            quia adipisci. Atque deserunt, ad autem dolor quasi enim ipsa
            impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cum maxime aperiam dolorem, qui rerum mollitia. Ipsam voluptatem
            dolor laborum quia adipisci. Atque des
          </p>
        </div>

        <img src={Vision} alt="" />
      </div>
    </div>
  );
};

export default ColumnPage;
