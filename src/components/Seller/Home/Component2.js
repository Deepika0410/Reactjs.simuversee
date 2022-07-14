import React from 'react';
// import virtualTry from '../../../images/VirtualTry.png';
// import reduceReturn from '../../../images/reduceReturn.png';
// import increaseAOV from '../../../images/increaseAOV.png';
// import reduceWaste from '../../../images/reduceWaste.png';
import uploadIcon from '../../../images/uploadicon.png';
import brandIcon from '../../../images/brand-image.png';
import pcIcon from '../../../images/personal-computer.png';
import shippedIcon from '../../../images/shipped.png';

import Icon, {
  ChromeFilled,
  DollarCircleFilled,
  UpCircleFilled,
  DownCircleFilled,
  CheckCircleFilled,
  MinusCircleFilled,
  FundFilled,
} from '@ant-design/icons';

import './comp2.css';
import arrow from './arrow9.png'
const Component2 = () => {
  return (
    <>

      <div className='container-fluid p-1'
        style={{ backgroundColor: "#f5f5f5",  }}
      >
        <div className='row' style={{marginLeft:"40px"}}>
          <h1 className='sell1'>
            How to sell with simuverse?
          </h1>
        </div>
        <div className='row justify-content-around p-0 mx-5'>
          <div className='col-lg-2 col-md-3'>
            <div className='row text-center'>
              <img src={pcIcon} className='img-fluid imhHwSet' />
            </div>
            <div className='row text-center text1'>
              <p>
                CREATE AN ACCOUNT
              </p>
            </div>
            <div className='row text-center text1'>
              <p>
                Firstly you will have to create a seller’s account.
              </p>
            </div>
          </div>
          <div className='col-lg-1 aliCen'>
            <img src={arrow} className='img-fluid' style={{ height: "30px", width: "80px" }} />
          </div>
          <div className='col-lg-2 col-md-3'>
            <div className='row text-center'>
              <img src={uploadIcon} className='img-fluid imhHwSet' />
            </div>
            <div className='row text-center text1'>
              <p>
                UPLOAD YOUR PRODUCTS
              </p>
            </div>
            <div className='row text-center text1'>
              <p>
                Then you will have to upload your products.
              </p>
            </div>
          </div>
          <div className='col-lg-1 aliCen'>
            <img src={arrow} className='img-fluid' style={{ height: "30px", width: "80px" }} />
          </div>
          <div className='col-lg-2 col-md-3'>
            <div className='row text-center '>
              <img src={shippedIcon} className='img-fluid imhHwSet' />
            </div>
            <div className='row text-center text1'>
              <p>
                SHIPPING METHODS
              </p>
            </div>
            <div className='row text-center text1'>
              <p>
                Mention the shipping methods that will be convinient for you.
              </p>
            </div>
          </div>
          <div className='col-lg-1 aliCen'>
            <img src={arrow} className='img-fluid alis' style={{ height: "30px", width: "80px" }} />
          </div>
          <div className='col-lg-2 col-md-3'>
            <div className='row text-center'>
              <img src={brandIcon} className='img-fluid imhHwSet' />
            </div>
            <div className='row text-center text1'>
              <p>
                GROW YOUR BRAND?
              </p>
            </div>
            <div className='row text-center text1'>
              <p>
                Sell your products and grow your brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Component2;
