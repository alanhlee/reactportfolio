import React from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Card2 from "../../components/Card2";

function Portfolio() {
  return (
    <>
      <div className="container">
        <h3>Projects</h3>
        <div className="row">
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card2 />
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
