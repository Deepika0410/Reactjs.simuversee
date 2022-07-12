import React from 'react'
import Base from '../../../Base';
import Sec3 from '../../Sec3';
import Comp1 from './Comp1';

function product() {
  return (
    <Base>
      <div style={{ marginTop: "4rem" }}>
        <Comp1 />
        <Sec3 />
      </div>
    </Base>
  )
}

export default product