import React, { useState,useEffect } from "react";
import "./characterCreation.css";
import casual3d from "../../images/casual-life-3d.png";
import CreateAvatar from "./CreateAvatar";
import EditAvatar from "./EditAvatar";
import axios from 'axios';
import AvatarCreated from "./AvatarCreated";
import { Route, Routes } from "react-router-dom";
const Url = `http://localhost:3000`


const CharacterCreation = () => {
  const [avatar, setAvatar] = useState(null);
  
    // Preview the Profile front Image.
  let [flag,setFlag] = useState(false)
  let [img1,setImg1] = useState([]);
  const Pid = localStorage.getItem("profileid");

  useEffect(()=>{

    if(Pid){
    axios.get(`${Url}/profile/one/${Pid}`).then(res=>setImg1(res.data.frontImage));
    console.log(img1);
    axios.get(img1).then(res=>setImg1(res.data));
      setFlag(true);
  }
  })

  return (  
    <div className="charCreate">
      <div className="head-t text-center p-5">
        <h4 >Welcome to SimuVerse</h4>
      </div>

      {/* img upload */}
      <div className="row">
        <div className="col-12 col-lg-6 ">
          <Routes>
            <Route path="/" element={<CreateAvatar />} />
            <Route path="/edit_avatar" element={<EditAvatar />} />
            <Route path="/avatar_created" element={<AvatarCreated />} />
          </Routes>
        </div>

        <div className="col-10 col-lg-6">
          
          <div className="img-cont">
            <img className="cas_img" src={flag?img1:casual3d} alt="3" />
          </div>
          <span style={{margin:"-50px -5px" ,padding: "2px",
  textAlign: "center"}}>
            <p >Preview Avatar</p>
          </span>
          
         
          
         
       
        </div>
      </div>
    </div>
  );
};
export default CharacterCreation;
