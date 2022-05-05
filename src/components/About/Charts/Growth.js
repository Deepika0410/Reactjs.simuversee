import React from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";


const Growth = () => {
    
    return(
  <div style={{padding: "4%"}}>
    <h1 style={{textAlign:"center"}}>Growth in Fashion Market</h1>
  <div style={{  display:"flex", justifyContent:"center" }}>
   

    <div style={{margin:"10px"}}>
   
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={7.2}
        duration={1.4}
        easingFunction={easeQuadInOut}
       
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
              styles={buildStyles({ pathTransition: "none" })}
            />
          );
        }}
      </AnimatedProgressProvider>
      <p style={{textAlign:"center"}}>Compund annual growth rate(2021-2026)</p>
   
    </div>
   <div  style={{margin:"10px"}}>
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={26.5}
        duration={1.4}
        easingFunction={easeQuadInOut}
       
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
              styles={buildStyles({ pathTransition: "none" })}
            />
          );
        }}
      </AnimatedProgressProvider>
      <p style={{textAlign:"center"}}>Total ecommerce fashion growth in 2020</p>
     </div>
      <div  style={{margin:"10px"}}>
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={29.6}
        duration={1.4}
        easingFunction={easeQuadInOut}
       
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
              styles={buildStyles({ pathTransition: "none" })}
            />
          );
        }}
      </AnimatedProgressProvider>
      <p style={{textAlign:"center"}}>Ecommerce apparel growth in 2020</p>
     </div>
     </div>
  </div>
);
    }


export default Growth;
