import React from "react";

const Cards = () => {
  return (
    <div className="cards">
      <div className="card">
        <p>Soshnick Hebrew School</p>
        <img
          className="card-pic"
          src="https://w2.chabad.org/media/images/1166/lPsG11667374.jpg"
          alt=""
        />
      </div>

      <div className="card">
        <p>Community Shul</p>
        <img className="card-pic" src={require("../images/shul.jpg")} alt="" />
      </div>

      <div className="card">
        <p>Woman Study</p>
        <img
          className="card-pic"
          src={require("../images/learning.jpg")}
          alt=""
        />
      </div>

      <div className="card">
        <p>Donate</p>
        <img
          className="card-pic"
          src={require("../images/donate.jpg")}
          alt=""
        />
      </div>
    </div>
  );
};

export default Cards;
