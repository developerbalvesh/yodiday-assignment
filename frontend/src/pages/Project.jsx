import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Dashboard from "./Dashboard";
import Items from "../components/Items";
import axios from "axios";

const Project = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [up, setUp] = useState(false);

  const getItems = async () => {
    try {
      // setTimeout(() => {
        // setUp(true);
      // }, 5000);
      setLoading(true);
      console.log(import.meta.env.VITE_REACT_APP_BACKEND_BASEURL);
      const { data } = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/items/all`
      );

      if (data?.success) {
        setLoading(false);
        setItems(data.file);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    getItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/items/search`,
        {
          search,
        }
      );
      if (data.success) {
        setLoading(false);
        setItems(data.file);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false)
    }
  };

  return (
    <>
      <Dashboard
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
      >
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
                  {loading ? (
                    <span>
                      Loading ...
                      <span>
                        {up
                          ? "Backend server is starting.. Please wait..."
                          : ""}
                      </span>
                      <i className="fa-solid fa-hourglass-end spin-clock"></i>
                    </span>
                  ) : (
                    <span>No Results found</span>
                  )}
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
