import React, { useState } from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Dashboard = ({ children, setSearch, search, handleSubmit }) => {

  const handleSearch=async(e)=>{
    e.preventDefault();
    try {
      handleSubmit(e);
      
    } catch (error) {
      
    }
  }
  return (
    <Layout>
      <div className="show-mobile hidden-space"></div>
      <div className="sticky-top p-3 pb-2 top-0 bg-white">
        <h5 className="pb-2 pt-1 show-desktop">Dashboard</h5>
        <div className="menus d-flex justify-content-between align-items-center">
          <div className="menu-list border-bottom">
            <NavLink to="/dashboard/project">Project</NavLink>
            <NavLink to="/dashboard/saved">Saved</NavLink>
            <NavLink to="/dashboard/shared">Shared</NavLink>
            <NavLink to="/dashboard/achievement">Achievment</NavLink>
          </div>
          <div className="d-flex justify-content-end gap-3 align-items-center">
            <p className="p-0 m-0 filter">
              <i className="fa-solid fa-filter pe-1"></i> Filter
            </p>
            <div className="search">
              <form onSubmit={(e) => handleSearch(e)}>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search a product"
                />
                <button className="bg-yodi text-light">
                  <i className="fa-solid fa-magnifying-glass bg-yodi text-light"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="list ps-3 pe-3">
        {children}
        {!children && (
          <>
            <div className="d-vh-100">
              <h2 className="p-3 text-secondary">Welcome to Dashboard</h2>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
