import React from "react";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="p-3">
        <h5>Page Not Found</h5>
        <h6 className="text-danger d-flex align-items-center">
          {/* <span className="p-4">This page is under construction! </span> */}
          <i className="fa-solid fa-gear spin-clock fs-1 text-secondary"></i>
          <i className="fa-solid fa-gear spin-anti-clock"></i>
        </h6>
      </div>
    </Layout>
  );
};

export default NotFound;
