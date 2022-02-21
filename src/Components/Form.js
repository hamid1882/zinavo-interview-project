import React from "react";

const Form = () => {
  return (
    <div className="container m-auto text-center my-5 w-75">
      <h2>Are you Hiring?</h2>
      <h4>We do the heavy lifting for you</h4>
      <p>
        We can empoer you, and help you, We can empoer you, and help you, We can
        empoer you, and help you
      </p>
      <div className="shadow m-2">
        <h3 className="p-2 fw-1 ">Get In Touch</h3>
        <hr />
        <div className="text-start p-2 px-4">
          <p>Name</p>
          <input
            className="form-control mb-5 outline-none shadow-none"
            type="name"
            placeholder="Enter Name"
          />
          <p>Email</p>
          <input
            className="form-control mb-5 outline-none shadow-none"
            type="email"
            placeholder="Enter Email"
          />
          <p>Message</p>
          <textarea
            className="form-control mb-5 outline-none shadow-none "
            style={{ height: "200px" }}
            type="text"
            placeholder="Enter Message"
          />
          <button className="w-100 btn btn-secondary outline-none shadow-none ">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
