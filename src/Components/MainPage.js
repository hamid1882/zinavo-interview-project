import React from "react";
import Company from "../Images/cominc.png";
import Requirement from "../Images/reqstaf.png";
import Executive from "../Images/executive.png";

const MainPage = () => {
  return (
    <div className="m-2 p-2 container text-center m-auto">
      <h3 className="text-dark text-center">
        MANAGEMENT CONSULTING COMPANY BASED IN BANGALORE
      </h3>
      <div className="row m-3 ">
        <div className="col row align-items-center text-center py-2 px-5 shadow ">
          <img src={Company} alt="" />
          <h3>Company</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            reiciendis odit cupiditate ab id consectetur asperiores placeat,
            amet sequi vero, temporibus voluptatem corporis incidunt tempore
            harum nisi. Deleniti, ullam consequuntur!
          </p>
          <button className="btn btn-secondary rounded-pill">Read More</button>
        </div>
        {/* 2nd */}
        <div className="col row align-items-center text-center py-2 px-5 shadow">
          <img src={Company} alt="requirement" />
          <h3>Requirements</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            reiciendis odit cupiditate ab id consectetur asperiores placeat,
            amet sequi vero, temporibus voluptatem corporis incidunt tempore
            harum nisi. Deleniti, ullam consequuntur!
          </p>
          <button className="btn btn-secondary rounded-pill">Read More</button>
        </div>
        {/* 3rd */}
        <div className="col row align-items-center text-center py-2 px-5 shadow">
          <img src={Executive} alt="" />
          <h3>Executives</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            reiciendis odit cupiditate ab id consectetur asperiores placeat,
            amet sequi vero, temporibus voluptatem corporis incidunt tempore
            harum nisi. Deleniti, ullam consequuntur!
          </p>
          <button className="btn btn-secondary rounded-pill">Read More</button>
        </div>
      </div>
      <h4 className="text-dark my-4 py-2">
        ❝Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        velit optio porro architecto, consectetur dolore praesentium? Magni vel
        fugiat deserunt voluptatem nisi, eveniet officiis at voluptate earum,
        fugit odio quae.❞
      </h4>
    </div>
  );
};

export default MainPage;
