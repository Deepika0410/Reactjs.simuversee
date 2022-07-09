import React, { useEffect, useState } from "react";
import cloth from "../../images/Dimension_Cloth.png";
import Orangecloth from "../../images/Orange_Cloth.png";
import VectorAdd from "./VectorAdd.png";
import rec from "../../images/Rectangle 7.png";
import poly1 from "../../images/Polygon 1.png"
import poly2 from "../../images/Polygon 2.png"
import ell from "../../images/ellipse1.png";
// import addImage2 from "../../images/addImage2.png";

import "./Seller2.css";
import { Steps } from "antd";
import { useNavigate } from "react-router-dom";
import { UseCart } from "../../context-api-setup/CartContext";
import axios from "axios";
const url = `${process.env.REACT_APP_SV_BACKEND}/product/`;
const Url = `${process.env.REACT_APP_SV_BACKEND}/product/`;
const { Step } = Steps;
const Seller2 = () => {
  let navigate = useNavigate();
  const [file1, setFile1] = useState("");
  const prdUplData = UseCart();
  const jwt = `JWT ${localStorage.getItem("token")}`;

    //   const [images, setImages] = useState(null);
  //   const [imageUrl, setImageUrl] = useState([]);

  //   const imageAddHandler = (e) => {
  //     console.log(e.target.files[0]);
  //     setImages(e.target.files[0]);
  //   };

  //   useEffect(() => {
  //     if (images.length < 1) return;
  //     const newImageUrl = [];
  //     images.forEach((image) => newImageUrl.push(URL.createObjectURL(image)));
  //     setImageUrl(newImageUrl);
  //   }, [images]);


  const firstImageHandler = (e) => {
    if (e.target.files.length > 0) {
      var src = URL.createObjectURL(e.target.files[0]);
      var preview = document.getElementById("image-preview");
      preview.src = src;
      setFile1(src);
      console.log(e.target.files[0]);
      prdUplData.PrdUplDispatch({
        type: "SET_DETAILS",
        payload: { ...prdUplData.PrdUplState, image: e.target.files[0] },
      });
    }
  };
  return (
    <div className="seller2_MainCont">
      <div className="seller2_Inner_Container">
        <div className="inner_Content2">
          <h3>Reference Image for Uploading</h3>
          <p>
          Select the image from your device that you want of the product to upload, for <br/> for listing on the SimuVerse portal.
          </p>
        </div>
        <div>
          <img src={cloth} alt="/" />
        </div>
      </div>
      <div className="seller2_progress">
        <h3>Products for Listing on SimuVerse</h3>
        <Steps size="small" current={2}>
          <Step title="" />
          <Step title="Details" />
          <Step title="Upload Image" />
          <Step title="" />
        </Steps>
      </div>
      <div className="seller2_Bottom_Container">
        <div className="left_Side">
          <h3>Image with No Background For Reference Only</h3>
          <div className="referenceImg">
            <img src={Orangecloth} alt="/"  />
          </div>
        </div>
        <div className="Bottom_Inner_Image_Main">
          <div className="Bottom_Inner_2">
             <div className="img_grid_sec"  style={{ borderRadius: "20px", padding: "35%" , textAlign:"center" }}

             >   <div className="images">
              <img src={rec} id="small_rec"  alt="imge"/>
            
              
              <img src={ell} className="ellips" style={{width:"6.35px" , height:"6.35px"}} alt="imge"/> 
              <img src={poly2} className="poly_2" style={{width:"41.88px" , height:"41.88px"}} alt="imge"/>
              <img src={poly1} className="poly" style={{width:"41.88px" , height:"41.88px"}} alt="imge"/>

              
            
              </div>
             <div>
             
             
   
            

             </div>
              </div>
           <div className="img_grid_sec"  style={{ borderRadius: "20px", padding: "35%" , textAlign:"center" }}>
              
           <div className="images">
              <img src={rec} id="small_rec"  alt="imge"/>
            
              
              <img src={ell} className="ellips" style={{width:"6.35px" , height:"6.35px"}} alt="imge"/> 
              <img src={poly2} className="poly_2" style={{width:"41.88px" , height:"41.88px"}} alt="imge"/>
              <img src={poly1} className="poly" style={{width:"41.88px" , height:"41.88px"}} alt="imge"/>

              
            
              </div>
            </div> 
            <div className="img_grid_sec" style={{ borderRadius: "20px", padding: "35%" , textAlign:"center" }}>
            <div className="images">
              <img src={rec} id="small_rec"  alt="imge"/>
            
              
              <img src={ell} className="ellips" style={{width:"6.35px" , height:"6.35px"}} alt="imge"/> 
              <img src={poly2} className="poly_2" style={{width:"41.88px" , height:"41.88px"}} alt="imge"/>
              <img src={poly1} className="poly" style={{width:"41.88px" , height:"41.88px"}} alt="imge"/>

              
            
              </div>
            </div>  
            <div
              className="img_grid_sec"
              style={{ borderRadius: "20px", padding: "35%" , textAlign:"center" }}
            >
              <label>
               <input
              type="file"
              name="image-uploader"
              onChange={firstImageHandler}
              id="image-uploader"
              accept="image/*"
              
            />
              <img src={VectorAdd} id="image-preview" alt="imge"/>{" "}
              </label>
            </div>
           
            {/* <div className="img_grid_sec_last">+</div> */}
          </div>
          <button
            onClick={() => {
              console.log(prdUplData.PrdUplState);
              let frmData = new FormData();
              for (var key in prdUplData.PrdUplState) {
                frmData.append(key, prdUplData.PrdUplState[key]);
              }
              
              axios
                .post(Url, frmData,{headers: { Authorization: jwt }})
                .then((resp) => console.log(resp));
              navigate("/shome/seller/productsuccess");
            }}
          >
            List Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seller2;