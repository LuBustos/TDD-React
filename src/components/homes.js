import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const homesDataPromise = Promise.resolve([
  {
    title: "Test home 1",
    image: "listing.jpg",
    location: "Test location 1",
    price: "1",
  },
  {
    title: "Test home 2",
    image: "listing.jpg",
    location: "Test location 2",
    price: "2",
  },
  {
    title: "Test home 3",
    image: "listing.jpg",
    location: "Test location 3",
    price: "3",
  },
  {
    title: "Test home 4",
    image: "listing.jpg",
    location: "Test location 4",
    price: "4",
  },
]);

const Homes = () => {
  const [homes, setHomes] = useState([]);
  useEffect(() => {
    const homesDataPromise = apiClient.getHomes();
    homesDataPromise
      .then((homesData) => {
        setHomes(homesData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={"container m-2"}>
      <h1>Homes</h1>
      <div className={"row"}>
        {homes.map((x, i) => {
          return (
            <div key={i} className={"col-6 col-md-6 col-lg-4 col-xl-3 mb-3"}>
              <div key={i+1} aria-label="homes" className={"card w-100"}>
                <img
                  aria-label="image"
                  src={x.image}
                  alt=""
                  className={"card-img-top"}
                  key={i+2}
                />
                <div>
                  <div key={i+3} aria-label="title" className={"card-title h5"}>{x.title}</div>
                  <div key={i+4} aria-label="location">{x.location}</div>
                  <div key={i+5} aria-label="price">${x.price}/night</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homes;
