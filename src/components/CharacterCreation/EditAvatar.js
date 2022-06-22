import React,{useState,useEffect} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import axios from 'axios'

import { AssistantDirection } from "@mui/icons-material";
function EditAvatar() {
  var [data,setd]=useState({ height:0, weight:0,bodyType:"none"});
  const pid=localStorage.getItem('profileid');
  const token=localStorage.getItem('token');
  const Url = 'http://localhost:3000'
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${Url}/profile/one/${pid}`)
    .then(response => response.json())
    .then(data => setd(data))
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
      .post(`${Url}/profile/`, formData, {
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
      <span className="s-head">
        <p>Avatar Details</p>
      </span>
      <div className="col-10 col-lg-6 edit_av ">
        <table>
          <tbody>
          <tr>
            <td>
              <label htmlFor="height">Height</label>
            </td>
            <td>
              <input onChange={handleHeight} placeholder={data.height} value={height} name="height" type="number" />
            </td>
            <td>cm</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="weight">Weight</label>
            </td>
            <td>
              <input onChange={handleWeight} value={weight} placeholder={data.weight} htmlFor="weight" type="number" />
            </td>
            <td>kg</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="b-type">Body Type</label>
            </td>
            <td>
              <select name="b-type" onChange={handleBody}>
              <option value="none" selected disabled hidden>{data.bodyType}</option>
              <option value="square">Square</option>
              <option value="trapezoid">Trapezoid</option>
              <option value="round">Round</option>
              </select>
            </td>
          </tr>
          {/* <tr>
            <td>
              <label htmlFor="o-datail">Other detail</label>
            </td>
            <td>
              <input name="o-detail" />
            </td>
            <td>oo</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="o-datail">Other detail</label>
            </td>
            <td>
              <input name="o-detail" />
            </td>
            <td>oo</td>
          </tr> */}
          </tbody>
        </table>
        <span>
          <button
            // onClick={() => navigate("/home/character-creation/avatar_created")}
            onClick={handleClick}
            className="nxt-btn"
          >
            Finish
          </button>
        </span>
      </div>
    </>
  );
}

export default EditAvatar;
