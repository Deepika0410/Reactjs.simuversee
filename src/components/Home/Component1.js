import React, {useEffect } from "react";
import "./comp1.css";
import axios from 'axios'
import { NavLink } from "react-router-dom";


const Component = () => {

  useEffect(()=>{
      const token = localStorage.getItem('token')
        console.log(token);
        
              if(token)
                axios.get(`http://localhost:3000/profile/user`,{ headers: {"Authorization" : `JWT ${token}`} })
                .then(response=>{
                    if(response.data[0].id)
                    localStorage.setItem("profileid",response.data[0].id);
                })
                .catch(error=>{
                    console.log(error)
                })
  })

  return (
    <div className="comp1_container">
      <div className="comp1_innerContainer">
        <div className="comp1_heading">
          <h3>Re imagining the way you shop Introducing SIMUVERSE</h3>
          <p>
          Click on the explore button below to know more about SimuVerse.
          </p>
          
            <NavLink id="exploreBtn" to="/home/character-creation"><div >Explore</div></NavLink>
          
        </div>
        {/* <img src={homeImage} alt="/" /> */}
      </div>
    </div>
  );
};

export default Component;
