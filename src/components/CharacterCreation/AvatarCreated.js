import React from "react";
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react';
import axios from 'axios'
import doneTickIcon from "../../images/icons8-tick-64 1.png";
const Url = 'http://localhost:3000'
function AvatarCreated() {
  const navigate = useNavigate();

  useEffect(()=>{
    const token=localStorage.getItem('token')
                axios.get(`${Url}/profile/user`,{ headers: {"Authorization" : `JWT ${token}`} })
                .then(response=>{
                    localStorage.setItem("profileid",response.data[0].id);
                })
                .catch(error=>{
                    console.log(error)
                })
  },[])
  
  return (
    <>
      <span className="s-head">
        <p>
          Avatar created <img src={doneTickIcon} />
        </p>
      </span>
      <div className="col-10  col-lg-6 crtd_av ">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim
          fringilla convallis. Ut convallis vehicula ante, id lacinia elit
          varius in. Fusce dictum faucibus
        </p>
        <span>
          <button onClick={() => navigate("/store")} className="g-shp-btn">
            Go shopping
          </button>
        </span>
      </div>
    </>
  );
}

export default AvatarCreated;
