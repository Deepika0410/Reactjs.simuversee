import React, { useState, useEffect } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

// import Component6 from './Component6';

import './home.css';
function SellerHome() {
  return (
    <div className="home_container">
      <Component1 />
      <Component2 />
      <Component3 />

      {/* <Component6 /> */}
    </div>
  );
}

export default SellerHome;
