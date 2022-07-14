import React from "react";
import ellipse7 from "../../images/ellipse7.png";
const Section2B = () => {
  return (
    <div className=" col-10 col-md-3 v-card">
      <div className="row">
        <div className="col-3">
          <img src={ellipse7} alt="" />
        </div>
        <div className="col-9">
          <p className="card-text">Reduce Return</p>
        </div>
      </div>

      <div className="smth">
        <p>
        Reduce returns by allowing customers to see your products in hi-res on their body type
        </p>
        <a href="/"><span className="span">Learn more</span></a>
      </div>
    </div>
  );
};

export default Section2B;
