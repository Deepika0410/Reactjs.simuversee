import React from "react";
import ellipse7 from "../../images/ellipse7.png";
import "./Section2.css";
const Section2A = () => {
  return (
    <div className=" col-10 col-md-3 v-card">
      <div className="row">
        <div className="col-3">
          <img src={ellipse7} alt="" />
        </div>
        <div className="col-9">
          <p className="card-text">Something something</p>
        </div>
      </div>

      <div className="smth">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim
          fringilla convallis. Ut convallis vehicula ante, id lacinia elit
          varius in. Fusce dictum faucibus lorem, eu dapibus ante condimentum
        </p>
        <a href="/"><span className="span">Learn more maybe</span></a>
      </div>
    </div>
  );
};

export default Section2A;
