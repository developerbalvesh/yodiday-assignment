import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Dashboard from "./Dashboard";
import Items from "../components/Items";
import axios from "axios";

const Project = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  const getItems = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/items/all`);

      if (data.success) {
        setItems(data.file);
      }
    } catch (error) {
      console.log(error.message);
    } 
  };
  useEffect(() => {
    getItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/items/search`, {
        search
      });
      if (data.success) {
        setItems(data.file);
      }
    } catch (error) {}
  };

  return (
    <>
      <Dashboard handleSubmit={handleSubmit} search={search} setSearch={setSearch}>
        <div className="d-vh-100">
          {items[0] ? (
            items?.map((itm, index) => (
              <div key={index}>
                <Items
                  title={itm.title}
                  description={itm.description}
                  name={itm.name}
                  location={itm.location}
                  image={itm.image}
                />
              </div>
            ))
          ) : (
            <>
            <div className="text-center pt-3">
              <h3 className="text-secondary">
                No Results found!
              </h3>
            </div>
            </>
          )}
        </div>
      </Dashboard>
    </>
  );
};

export default Project;
