import React from "react";

const Navbar = ({ onOpen }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center "></div>
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-48 md:w-auto"
      />
      <div className="navbar-end">
        <a className="btn" onClick={onOpen}>
          Add Client
        </a>
      </div>
    </div>
  );
};

export default Navbar;
