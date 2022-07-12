import React,{useState,useEffect} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import axios from 'axios'

import { AssistantDirection } from "@mui/icons-material";
function EditAvatar() {

  // If the previous profile exists then get the data , it is like live update. CHANGE the height weight and bodyType in the input form


  var [data,setd]=useState({ height:0, weight:0,bodyType:"none"});
  const pid=localStorage.getItem('profileid');
  const token=localStorage.getItem('token');
  const Url = 'http://localhost:3000'
  let navigate = useNavigate();


  useEffect(() => {
    if(pid){
      fetch(`${process.env.REACT_APP_SV_BACKEND}/profile/one/${pid}`)
      .then(response => response.json())
      .then(data => setd(data))}
  },[])


  
  const location = useLocation();
  const { image1, image2 } = location.state;
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bodyType, setBodyType] = useState("square");
  const jwt = `JWT ${localStorage.getItem("token")}`;

  const handleClick = () => {
    let data = {
      frontImage: image1,
      sideImage: image2,
      height: height,
      weight: weight,
      bodyType: bodyType,
    };

    let formData = new FormData();
    for (var key in data) {
      formData.append(key, data[key]);
    }
    console.log("data", formData);
    axios
      .post(`${process.env.REACT_APP_SV_BACKEND}/profile/`, formData, {
        headers: { Authorization: jwt },
      })
      .then((res) => {
        console.log(res);
        navigate("../avatar_created");
      })
      .catch((error) => {
        window.alert(error);
      });
  };
  const handleHeight = (e) => {
    setHeight(e.target.value);
  };
  const handleWeight = (e) => {
    setWeight(e.target.value);
  };
  const handleBody = (e) => {
    setBodyType(e.target.value);
  }; 
 
  return (
    <>
      <span className="s-head ">
        <p style={{textAlign:"center" , margin:"0% 0% 2% -13%"}}>Avatar Details</p>
      </span>
      <div className="col-10 col-lg-6 edit_av  ">
        <table className="mx-auto">
          <tbody >
          <tr>
            <td>
              <label htmlFor="height">Height</label>
            </td>
            <td>
              <input onChange={handleHeight} placeholder={height} value={height} name="height" type="number" />
            </td>
            <td>cm</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="weight">Weight</label>
            </td>
            <td>
              <input onChange={handleWeight} value={weight} placeholder={weight} htmlFor="weight" type="number" />
            </td>
            <td>kg</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="b-type">Body Type</label>
            </td>
            <td>
              <select name="b-type" onChange={handleBody}>
              <option value="none" selected disabled hidden>{bodyType}</option>
              <option value="square">Square</option>
              <option value="trapezoid">Trapezoid</option>
              <option value="round">Round</option>
              </select>
            </td>
          </tr>
        
          </tbody>
        </table>
        <span>
          <button
            //onClick={() => navigate("/home/character-creation/avatar_created")}
            onClick={handleClick}
            className="nxt-btn " style={{textAlign:"center" , margin:"8% 0% 2% 30%"}}
          >
            Finish
          </button>
        </span>
      </div>
    </>
  );
}

export default EditAvatar;
