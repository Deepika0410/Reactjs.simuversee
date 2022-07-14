import React from "react";
import ellipse7 from "../../images/ellipse7.png";
const Section2C = () => {
  return (
    <div className=" col-10 col-md-3 v-card">
      <div className="row">
        <div className="col-3">
          <img src={ellipse7} alt="" />
        </div>
        <div className="col-9">
          <p className="card-text">Reduce Waste</p>
        </div>
      </div>

      <div className="smth">
        <p>
        Help reduce your eco footprint by providing a solution that minimises material wastage or damaged stock
        </p>
        <a href="/"><span className="span">Learn more</span></a>
      </div>
    </div>
  );
};

export default Section2C;
