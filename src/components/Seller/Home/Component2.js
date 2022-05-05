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
const Component2 = () => {
  return (
    <div className="comp2_container">
      <div>
        <img src={pcIcon} alt="/" style={{ height: '100px' }} />
        <h3>CREATE AN ACCOUNT</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div>
        <img src={uploadIcon} alt="/" style={{ maxHeight: '100px' }} />
        <h3>UPLOAD YOUR PRODUCTS</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div>
        <img src={shippedIcon} alt="/" style={{ height: '100px' }} />
        <h3>SHIPPING METHODS</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div>
        <img src={brandIcon} alt="/" style={{ height: '100px' }} />
        <h3>GROW YOUR BRAND</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default Component2;
