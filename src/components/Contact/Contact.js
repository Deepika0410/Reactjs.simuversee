import React from "react";
import Base from "../Base";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
// import Section4 from "./Section4";

const Contact = () => {
  return (
    <Base>
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      {/* <Section4 /> */}
    </div>
    </Base>
  );
};

export default Contact;
