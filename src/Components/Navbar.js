import React from "react";

const Navbar = () => {
  return (
    <div className="navbar mx-2 d-flex justify-content-end gap-3">
      <button className="btn btn-success rounded-pill">Home</button>
      <button className="btn btn-light rounded-pill">
        Recruitment and staffing
      </button>
      <button className="btn btn-light rounded-pill">Executive Search</button>
      <button className="btn btn-light rounded-pill">About Us</button>
      <div className="border p-2 rounded-pill shadow">
        <img
          style={{ height: "20px", width: "20px" }}
          className="mx-1"
          src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-search-ui-dreamstale-lineal-dreamstale.png"
          alt="search icon"
        />
        <input
          type="search"
          placeholder="Search"
          className="border-0 outline-none shadow-none input-focus"
        />
      </div>
    </div>
  );
};

export default Navbar;
