import React,{useState} from "react";
import "./characterCreation.css";
import charImg1 from "../../images/char_image1.png";
import charImg2 from "../../images/char_image2.png";
import { useNavigate,NavLink } from "react-router-dom";
function CreateAvatar() {
  const navigate = useNavigate();
  const [img1,setImg1] = useState();
  const [img2,setImg2] = useState();
  const handleUpload1 = (e) =>{
    if (e.target.files.length > 0) {
      var src = URL.createObjectURL(e.target.files[0]);
      var preview = document.getElementById("img1-preview");
      preview.src = src;
      setImg1(e.target.files[0]);
      console.log(e.target.files[0])
  }
  }

  const handleUpload2 = (e) =>{
    if (e.target.files.length > 0) {
      var src = URL.createObjectURL(e.target.files[0]);
      var preview = document.getElementById("img2-preview");
      preview.src = src;
      setImg2(e.target.files[0]);
      console.log(src)
  }

  }
  return (
    <>
      <span className="s-head">
        <p>Upload picture to create your 3D Avatar</p>
      </span>
      <div
        className="upld_container col-12 "
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className=" col-lg-6 ">
          <div className="up-img1 " style={{marginLeft:"2px"}}>
            <img className="uploaded_img1" width="100%" id="img1-preview" src={charImg1} alt="img1" />
            

          </div>

          <span>
            <label>
            <input type="file" name='image-uploader' onChange={handleUpload1} id='image-uploader' accept='image/*' />
            <h3 className="uploadh2" style={{fontFamily:"Poppins" , fontStyle:"normal" , fontWeight:"400", fontSize:"16px", position:"absolute", left:"5rem"}}>Upload Image</h3>

            </label>
         
          </span>
          <span>
            <button
               onClick={() =>
                navigate("/home/character-creation/avatar_created")
               }
              className="nxt-btn"
            >
              Next
            </button>
          </span>
        </div>
        <div className=" col-lg-6 " style={{marginLeft:"20px"}}>
          <div className="up-img2 ">
            <img className="uploaded_img1" id="img2-preview" width="100%" src={charImg2} alt="img2" />
          </div>
            <div>
            <span>
            <label>
            <input type="file" name='image-uploader' onChange={handleUpload2} id='image-uploader' accept='image/*' />
            <h3 className="uploadh2" style={{fontFamily:"Poppins" , fontStyle:"normal" , fontWeight:"400", fontSize:"16px", position:"absolute", left:"25rem"}}>Upload Image</h3>

            </label>
         
          </span>
            </div>
          
          <span>
            <NavLink to={"/home/character-creation/edit_avatar"} state={{image1:img1, image2:img2}}><button
              onClick={() => navigate('/home/character-creation/edit_avatar')}
               className="edt-btn"
            >
              Edit Details
            </button></NavLink> 
          </span>
        </div>
      </div>
    </>
  );
}

export default CreateAvatar;
