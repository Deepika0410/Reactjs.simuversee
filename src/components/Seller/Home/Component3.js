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
  <h1 className='choose1'>
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
            Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className='col-md-5'>
        <div className='row dolor1'>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet nisi ut lorem ornare sollicitudin. Fusce eget quam purus
          </p>
       </div>
        </div>
      </div>


      <div className='row justify-content-around mt-5'>
        <div className='col-md-5'>
        <div className='row dolor1'>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet nisi ut lorem ornare sollicitudin. Fusce eget quam purus
          </p>
       </div>
        </div>

        <div className='col-md-5'>
          <div className='row'>
            <img src={exchangeicon}  className="img-fluid logoHw1"/>
          </div>
          <div className='row shift'>
            <p>
            Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit.
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
            Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className='col-md-5'>
        <div className='row dolor1'>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet nisi ut lorem ornare sollicitudin. Fusce eget quam purus
          </p>
       </div>
        </div>
      </div>


      <div className='row justify-content-around mt-5'>
        <div className='col-md-5'>
        <div className='row dolor1'>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet nisi ut lorem ornare sollicitudin. Fusce eget quam purus
          </p>
       </div>
        </div>

        <div className='col-md-5'>
          <div className='row'>
            <img src={trashicon} className="img-fluid logoHw1"/>
          </div>
          <div className='row shift'>
            <p>
            Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

    </div>
    </>
    
  );
};

export default Component3;
