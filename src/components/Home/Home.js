import React, { useState, useEffect } from "react";
import Base from "../Base";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";

// import Component6 from './Component6';

import "./home.css";
function Home() {
  return (
    <Base>
    <div className="home_container">
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />

      {/* <Component6 /> */}
    </div>
    </Base>
  );
}

export default Home;
