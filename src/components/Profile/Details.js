import React, { useState,useEffect } from "react";
import axios from 'axios'
import "./Details.css";

const Details = () => {
  const [details, setDetails] = useState({
    height: "",
    chest: "",
    waist: "",
    leg: "",
    weight: "",
  });
  useEffect(() => {
    axios
      .get("http://localhost:4000/profile/08b65e98-7d11-4567-a63d-e6d38b8a7bd7")
      .then((resp) => {
        setDetails({height:resp.data.height,chest:resp.data.chestSize,waist:resp.data.waistSize,leg:resp.data.legSize,weight:resp.data.weight})
        console.log(resp)
      })
      .catch((err) => console.log(err));
  }, []);
  
 
  return (
    <div className="details_form">
    <div className="details_Heading">
      <h3>Details</h3>
      <p>
        Hey there! Fill in your details for a personalized SimuVerse Shopping
        experience
      </p>
    </div>
    <div className="details_Right_Con">
      <label>Height</label>

      <input
        type="number"
        name="height"
        value={details.height}
        readonly="true"
      />

      <label>Body Weight</label>

      <input
        type="number"
        name="weight"
        value={details.weight}
        readonly="true"
      />

      <label>Chest Size</label>

      <input
        type="number"
        name="chest"
        value={details.chest}
      readonly="true"
      />

      <label>Waist Size</label>

      <input
        type="number"
        name="waist"
        value={details.waist}
        readonly="true"
      />

      <label>Leg Size</label>
      <input
        type="number"
        name="leg"
        value={details.leg}
        readonly="true"
      />
    </div>

    {/* <button className="bottom_Submit" onClick={submitHandler}>
      Submit
    </button> */}
  </div>
  );
};

export default Details;
