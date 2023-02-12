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
    <div className="container-fluid mt-5">
      <div className="row text-start">
        {data.map((data, index) => (
          <div className="col-6">
            <div className="card text-bg-white" key={index}>
              <img
                src="https://images.unsplash.com/photo-1675019335923-05c6ddce8546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NjE1NTg1Ng&ixlib=rb-4.0.3&q=80&w=1080"
                className="card-img background-img"
                alt="..."
              />
              <div className="card-img-overlay">
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
