import React from "react";
import { useEffect, useState } from "react";
import { getPosts } from "../api/getPosts";
import "./card.css";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getPosts().then(setData);
  }, []);
  console.log(data);

  return (
    <div className="container mt-5">
      <div className="row text-start g-0" >
        {data.map((data, index) => (
          <div className="col-md-6 col-sm-12">
            <div className="card rounded-0" key={index}>
              <img
                src="https://images.unsplash.com/photo-1675273673229-6b80c1dc33bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NjE4MzU3Ng&ixlib=rb-4.0.3&q=80&w=1080"
                className="card-img-top background-img"
                alt="background-img"
              />
              <div className="card-img-overlay text-content">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">
                  <small>Comments</small>
                </p>
                <p className="card-text">{data.body}</p>
                <p>TRAVEL</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
