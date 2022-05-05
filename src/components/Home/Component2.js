import React from "react";
import virtualTry from "../../images/VirtualTry.png";
import reduceReturn from "../../images/reduceReturn.png";
import increaseAOV from "../../images/increaseAOV.png";
import reduceWaste from "../../images/reduceWaste.png";
import Icon, {
  ChromeFilled,
  DollarCircleFilled,
  UpCircleFilled,
  DownCircleFilled,
  CheckCircleFilled,
  MinusCircleFilled,
  FundFilled,
} from "@ant-design/icons";

import "./comp2.css";
const Component2 = () => {
  return (
    <div className="comp2_container">
      <div>
        <img src={virtualTry} alt="/" />
        <h3>VIRTUAL TRY ON</h3>
        <p>
          Allow your customers to try-on any of your products, anywhere, anytime
          - without the wait of a change room
        </p>
      </div>
      <div>
        <img src={virtualTry} alt="/" />
        <h3>REDUCE RETURN</h3>
        <p>
          Reduce returns by allowing customers to see your products in hi-res on
          their body type
        </p>
      </div>
      <div>
        <img src={increaseAOV} alt="/" />
        <h3>INCREASE AOV</h3>
        <p>
          Average oder value is bound to increase with this easy and competitive
          shopping experience
        </p>
      </div>
      <div>
        <img src={reduceWaste} alt="/" />
        <h3>REDUCE WASTE</h3>
        <p>
          Help reduce your eco footprint by providing a solution that minimises
          material wastage or damaged stock
        </p>
      </div>
    </div>
  );
};

export default Component2;
