import React from 'react';
import './comp3.css';

import threedmod from '../../../images/3d-model.png';
import trashicon from '../../../images/trashicon.png';
import exchangeicon from '../../../images/exchangeicon.png';
import buyicon from '../../../images/buyicon.png';
const Component3 = () => {
  return (
    <>
    <div className='container-fluid p-1'>
    <div className='row'>
  <h1 className='choose1 ' style={{marginLeft:"5rem"}}>
  Why choose us?
  </h1>
</div>
    </div>
    <div className='container'>


      <div className='row justify-content-around'>
        <div className='col-md-5'>
          <div className='row'>
            <img src={threedmod} className="img-fluid logoHw1"/>
          </div>
          <div className='row shift'>
            <p>
            Virtual try on
            </p>
          </div>
        </div>
        <div className='col-md-5'>
        <div className='row dolor1'>
          <p>
          Allow your customers to try-on any of your products, anywhere, anytime - without the wait of a change room
          </p>
       </div>
        </div>
      </div>


      <div className='row justify-content-around mt-5'>
        <div className='col-md-5'>
        <div className='row dolor1'>
          <p>
          Reduce returns by allowing customers to see your products in hi-res on their body type
          </p>
       </div>
        </div>

        <div className='col-md-5'>
          <div className='row'>
            <img src={exchangeicon}  className="img-fluid logoHw1"/>
          </div>
          <div className='row shift'>
            <p>
            Reduces return
            </p>
          </div>
        </div>
      </div>


      <div className='row justify-content-around mt-5'>
        <div className='col-md-5'>
          <div className='row'>
            <img  src={buyicon} className="img-fluid logoHw1"/>
          </div>
          <div className='row shift'>
            <p>
            Increase AOV
            </p>
          </div>
        </div>
        <div className='col-md-5'>
        <div className='row dolor1'>
          <p>
          Average oder value is bound to increase with this easy and competitive shopping experience
          </p>
       </div>
        </div>
      </div>


      <div className='row justify-content-around mt-5'>
        <div className='col-md-5'>
        <div className='row dolor1'>
          <p>
          Help reduce your eco footprint by providing a solution that minimises material wastage or damaged stock
          </p>
       </div>
        </div>

        <div className='col-md-5'>
          <div className='row'>
            <img src={trashicon} className="img-fluid logoHw1"/>
          </div>
          <div className='row shift'>
            <p>
            Reduce waste
            </p>
          </div>
        </div>
      </div>

    </div>
    </>
    
  );
};

export default Component3;
