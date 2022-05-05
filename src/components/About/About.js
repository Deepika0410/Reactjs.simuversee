import React, { useState, useEffect } from "react";
import Icon, { UpOutlined } from "@ant-design/icons";
import "./About.css";
import Growth from "./Charts/Growth";
import Retail from "./Charts/Retail";
import Return from "./Charts/Return";
import Revenue from "./Charts/Revenue";
import ReturnReason from "./Charts/ReturnReason";
import "bootstrap/dist/css/bootstrap.min.css";

import Abt from "./Abt";

function About() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // function to check the scroll height
    const onScroll = () => setHeight(window.pageYOffset);
    console.log(height);
    // ------------------clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [height]);

  //------------------scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Abt />
      <div className="c3">
        <Revenue />
      </div>
      <div className="c2">
        <Growth />
      </div>
      <div className="c3">
        <Retail />
      </div>
      <div className="c1">
        <Return />
      </div>
      <div className="c3">
        <ReturnReason />
        {height > 200 ? (
          <div className="scroll-top" onClick={scrollToTop}>
            {" "}
            <Icon
              component={UpOutlined}
              style={{ fontSize: "15px", color: "white" }}
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default About;
