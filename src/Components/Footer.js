import React from "react";
import Youtube from "../Images/youtube.png";
import Twitter from "../Images/twitter.png";
import Facebook from "../Images/fb.png";

const Footer = () => {
  return (
    <div className="container-fluid m-auto row bg-dark my-3 p-2 px-5 text-light align-items-center">
      <div className="col ">
        <div>
          <h3>Company Info</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            voluptas iste commodi minima officiis laborum, voluptates culpa
            dolor ad aliquam. Aut, ipsum. Reiciendis corporis velit modi
            necessitatibus, maxime et sint?
          </p>
        </div>
      </div>
      <div className="col text-center">
        <div>
          <h3>Help Support</h3>
          <button className="btn btn-secondary">Contact us</button>
        </div>
      </div>
      <div className="col ">
        <div className="text-center">
          <h3>Connect With us</h3>
          <div className="d-flex gap-2 justify-content-center">
            <a href="https://www.youtube.com/user/ZinavoTechnologies/featured">
              <img src={Youtube} alt="youtube" />
            </a>
            <a href="https://www.facebook.com/ZinavoTechnologies/">
              <img src={Facebook} alt="youtube" />
            </a>{" "}
            <a href="https://twitter.com/Zinavogroup">
              <img src={Twitter} alt="youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
