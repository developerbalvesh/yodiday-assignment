import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";

const Shared = () => {
  return (
    <Dashboard>
      <div className="d-vh-100">
        <h2 className="p-3 text-secondary">Shared</h2>
        <h6 className="text-danger d-flex align-items-center">
          <span className="p-4">This page is under construction! </span>
          <i className="fa-solid fa-gear spin-clock fs-1 text-secondary"></i>
          <i className="fa-solid fa-gear spin-anti-clock"></i>
        </h6>
      </div>
    </Dashboard>
  );
};

export default Shared;
