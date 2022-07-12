import React from "react";
import Base from "../Base";

import Sec1 from "./Sec1";
import Sec2 from "./Sec2";
import Sec3 from "./Sec3";
import Sec4 from "./Sec4";

function Store() {
  return (
    <Base>
      <div>
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Sec4 />
      </div>
    </Base>
  );
}

export default Store;
