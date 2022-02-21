import React from "react";
import Client from "../Images/client.png";
import Transparent from "../Images/transparent.png";
import Industry from "../Images/industry.png";
import Unrivelled from "../Images/unrivalled.png";

const Services = () => {
  return (
    <div className="container m-auto">
      <h1 className="text-center fw-1 my-2">Our Specialised Services</h1>
      <div className="row gap-3 align-items-center my-2">
        <img src={Client} alt="client" className="col col-2" />
        <div className="col ">
          <h3>Client</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            vitae repellendus corrupti porro tenetur inventore et recusandae
            nostrum a praesentium omnis aliquam, dolorem quam sequi delectus
            voluptate ea doloremque adipisci?Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Fugit vitae repellendus c
          </p>
        </div>
      </div>
      {/* 2nd */}
      <div className="row gap-3 align-items-center my-2">
        <img src={Transparent} alt="client" className="col col-2" />
        <div className="col ">
          <h3>Transparent</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            vitae repellendus corrupti porro tenetur inventore et recusandae
            nostrum a praesentium omnis aliquam, dolorem quam sequi delectus
            voluptate ea doloremque adipisci?Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Fugit vitae repellendus c
          </p>
        </div>
      </div>
      {/* 3rd */}
      <div className="row gap-3 align-items-center my-2">
        <img src={Industry} alt="client" className="col col-2" />
        <div className="col ">
          <h3>Industry</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            vitae repellendus corrupti porro tenetur inventore et recusandae
            nostrum a praesentium omnis aliquam, dolorem quam sequi delectus
            voluptate ea doloremque adipisci?Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Fugit vitae repellendus c
          </p>
        </div>
      </div>
      {/* 4th */}
      <div className="row gap-3 align-items-center my-2">
        <img src={Unrivelled} alt="client" className="col col-2" />
        <div className="col ">
          <h3>Unrivelled</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            vitae repellendus corrupti porro tenetur inventore et recusandae
            nostrum a praesentium omnis aliquam, dolorem quam sequi delectus
            voluptate ea doloremque adipisci?Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Fugit vitae repellendus c
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
