import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <div className="grid">
        <header className="d-flex gap-4 justify-content-end align-items-center">
          <h4 className="show-mobile p-0 m-0">Profile</h4>
          <div className="d-flex gap-2 align-items-center justify-content-center">
            <div className="bell show-desktop">
              <i className="fa-regular fa-bell fs-4 text-secondary cursor-pointer"></i>
            </div>
            <div className=" d-flex gap-2 align-content-center show-mobile">
              <i className="cursor-pointer fa-solid fa-bell fs-4 show-mobile text-yodi"></i>
              <i className="cursor-pointer fa-solid fs-4 fa-bag-shopping show-mobile text-yodi"></i>
            </div>
            <div className="profile d-flex gap-2">
              <img className="show-desktop" src="/avatar.png" alt="" />
              <div className="d-flex flex-column gap-0 justify-content-between">
                <h5 className="p-0 m-0 show-desktop">
                  Balvesh <i className="fa-solid fa-caret-down"></i>
                </h5>
                <h5 className="p-0 m-0 text-secondary show-desktop">Manager</h5>
              </div>
            </div>
          </div>
        </header>
        <div className="pages">{children}</div>
        <div className="left-bar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="menus">
            <ul>
              <li>
                <NavLink to="/dashboard" className="d-flex">
                  <i className="fa-solid fa-list show-desktop"></i>
                  <i className="fa-solid fa-house-user show-mobile"></i>
                  <span className="show-desktop">Dashboard</span>{" "}
                  <span className="show-mobile">Home</span>{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="d-flex">
                  <i className="fa-solid fa-bullhorn show-desktop"></i>
                  <i className="fa-solid fa-briefcase show-mobile"></i>
                  Portfolio{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/inputs" className="d-flex">
                  <i className="fa-solid fa-pen-ruler show-desktop"></i>
                  <i className="fa-solid fa-file-circle-plus show-mobile"></i>
                  Inputs{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" className="d-flex">
                  <i className="fa-solid fa-id-card show-desktop"></i>
                  <i className="fa-solid fa-user show-mobile"></i>
                  Profile{" "}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
