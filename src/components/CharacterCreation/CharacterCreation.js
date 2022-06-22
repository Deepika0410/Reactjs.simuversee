import React, { useState } from "react";
import "./characterCreation.css";
import casual3d from "../../images/casual-life-3d.png";
import CreateAvatar from "./CreateAvatar";
import EditAvatar from "./EditAvatar";
import AvatarCreated from "./AvatarCreated";
import { Route, Routes } from "react-router-dom";

const CharacterCreation = () => {
  const [avatar, setAvatar] = useState(null);

  return (
    <div className="charCreate">
      <div className="head-t">
        <h4>Welcome to SimuVerse</h4>
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
            <img className="cas_img" src={casual3d} alt="3" />
          </div>
          <span>
            <p>Preview Avatar</p>
          </span>
          <br />
        </div>
      </div>
    </div>
  );
};
export default CharacterCreation;
