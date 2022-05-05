import React from 'react';
import './comp3.css';

import threedmod from '../../../images/3d-model.png';
import trashicon from '../../../images/trashicon.png';
import exchangeicon from '../../../images/exchangeicon.png';
import buyicon from '../../../images/buyicon.png';
const Component3 = () => {
  return (
    <div className="container-fluid contFl">
      <div className="row">
        <div align="left" className="hd1">
          Why Choose Us?
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="specDiv">
            <img src={threedmod} />
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="specDiv2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              imperdiet nisi ut lorem ornare sollicitudin. Fusce eget quam purus
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 order-md-last">
          <div className="specDiv">
            <img src={exchangeicon} />
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="col-sm-6 order-md-first">
          <div className="specDiv2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              imperdiet nisi ut lorem ornare sollicitudin. Fusce eget quam purus
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="specDiv">
            <img src={buyicon} />
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="specDiv2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              imperdiet nisi ut lorem ornare sollicitudin. Fusce eget quam purus
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 order-md-last">
          <div className="specDiv">
            <img src={trashicon} />
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="col-sm-6 order-md-first">
          <div className="specDiv2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              imperdiet nisi ut lorem ornare sollicitudin. Fusce eget quam purus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component3;
