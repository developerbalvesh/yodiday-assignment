import axios from "axios";
import React, { useEffect } from "react";

const Items = ({ title, description, name, location, image }) => {
  return (
    <>
      <div className="row gap-0 p-0 m-0 mt-2 mb-3">
        <div className="col-3 gap-0 p-0 m-0">
          {image ? (
            <img src={`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/items/images/${image}`} alt={title} />
          ) : (
            <img src="/image.png" alt={title} />
          )}
        </div>
        <div className="col-9 gap-0 p-0 m-0">
          <div className="p-3 position-relative">
            <h5 className="p-0 m-0 fw-bold">{title}</h5>
            <p className="text-secondary p-0 m-0 mb-3">{description}</p>
            <h6 className="p-0 m-0">{name}</h6>
            <p className="text-secondary p-0 m-0 w-50">{location}</p>
            <button className="add-cart rounded position-absolute bottom-0 end-0 me-3 mb-2">
              <span className="show-desktop">Add to Cart</span>
              <span className="show-mobile">Add</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
