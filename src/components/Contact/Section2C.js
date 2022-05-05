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
          <p className="card-text">Something something</p>
        </div>
      </div>

      <div className="smth">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim
          fringilla convallis. Ut convallis vehicula ante, id lacinia elit
          varius in. Fusce dictum faucibus lorem, eu dapibus ante condimentum
        </p>
      </div>
    </div>
  );
};

export default Section2C;
