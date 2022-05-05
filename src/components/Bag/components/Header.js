import React from 'react';
import './Header.css';
import Simuverse from '../../../images/simuverse_logo.png';
import EastIcon from '@mui/icons-material/East';
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="section1">
          {/* <img className="companyLogo" src={Simuverse} /> */}
        </div>
        <div className="section2">
          <h2 style={{ color: 'white', fontWeight: 'normal' }}>
            Checkout &#8594; Address{' '}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Header;
