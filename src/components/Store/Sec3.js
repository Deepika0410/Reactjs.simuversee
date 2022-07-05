import React, { useEffect, useState } from "react";
import "./sec3.css";
import cloth from "../../images/clean-clothes2.png";
import cloth2 from "../../images/clean-clothes3.png";
import cloth3 from "../../images/clean-clothes.png";
import mod1 from "../../images/model1.jpg";
import mod2 from "../../images/model2.jpg";
import mod3 from "../../images/model3.jpg";
import jean from "../../images/jean.png";
import tsizechart from "../../images/t-shirtchart.png";
import axios from "axios";

// TODO: get products data from backend
var data = [
  {
    image: cloth,
    name: "Cloth 1",
    modelsrc: mod1,
  },
  {
    image: cloth2,
    name: "Cloth 2",
    modelsrc: mod2,
  },
  {
    image: cloth3,
    name: "Cloth 3",
    modelsrc: mod3,
  },
];

function Sec3() {
  let [incre, setIncre] = useState(0);
  const [modelsrc, setModelsrc] = useState(mod1)
  const [fscore, setFscore] = useState(null)
  const token=localStorage.getItem('token')
  const pid=localStorage.getItem('profileid');

  const handleNext = () => {
    incre < data.length - 1
      ? setIncre((prev) => (incre = prev + 1))
      : setIncre(0);
  };
  // const handlePrev = () => {
  //   incre > 0
  //     ? setIncre((prev) => (incre = prev - 1))
  //     : setIncre(data.length - 1);
  // };
  const handleClick=async()=> {
    let res = await axios(`${process.env.REACT_APP_SV_BACKEND}/recommendation/model`, 
    {headers: {"Authorization" : `JWT ${token}`},params:{'profile_id': pid, 'product_id': data[incre].id}})
    setModelsrc(res)
    let res2 = await axios(`${process.env.REACT_APP_SV_BACKEND}/recommendation/score`, 
    {headers: {"Authorization" : `JWT ${token}`},params:{'profile_id': pid, 'product_id': data[incre].id}})
    setFscore(res2.fitness_score)
  }

  useEffect(()=>{
    async function fetchData() {
    await axios.get(`${process.env.REACT_APP_SV_BACKEND}/product`)
      .then(res => data = res.data)
    }
    fetchData()
  },[])
    const handlePrev = () =>{
        incre>0 ?setIncre(prev => incre=prev-1):setIncre(data.length-1)
    }
    return (
        <div class="container" style={{ padding: "1%" }}>
            <div class="row justify-content">
                <div class="col-md-6 hl1" style={{ paddingLeft: "5%", textAlign: "left" }}>
                    <p>Recommended for you</p>
                </div>
            </div>

            <div class="row slc" align="right"  >
                <div class="col" >
                    <button class="button b-ctrl" onClick={handlePrev}> <b> &#60; </b> </button>
                    &nbsp;
                    <button class="button b-ctrl" onClick={handleNext}> <b> &#62; </b></button>

                </div>

            </div>

            <div class="row justify-content-center" align="center">



                <div class="col-md " style={{ maxWidth: "410px" }}>

                    <div class="c11" style={{ marginBottom: "2%", marginTop: "1%", paddingTop: "2%", paddingLeft: "2%" }}>
                        <div class="row">
                            <div class="col c12">
                                <img className="img-fluid"  alt="img1" src={data[incre].shirtsrc} />
                            </div>
                            <div class="col" >
                                <div class="item-title" align="left"> {data[incre].shirttit} </div>
                                <p class="item-desc" align="left"> Small details about the cloth </p>

                                <p class="item-desc" align="left"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim fringilla convallis.</p>

                                <div align="right"> <button class=" b-btn">Buy</button></div>
                            </div>

                        </div>

                    </div>


                    <div class="c11" style={{ marginBottom: "1%", marginTop: "3%", paddingTop: "2%", paddingLeft: "2%" }}>
                       
                            <div class="col c13">
                                {/* <img className="img-fluid" alt="img" src={tsizechart} /> */}
                                <div class="table-responsive">
                        <table class="table table-striped" style={{textAlign:"center"}}>
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Collar Size</th>
      <th scope="col">Chest Size</th>
      <th scope="col">Waist Size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">S</th>
      <td>37-38</td>
      <td>104</td>
      <td>92</td>
    </tr>
    <tr>
      <th scope="row">M</th>
      <td>39-40</td>
      <td>110</td>
      <td>98</td>
    </tr>
    <tr>
      <th scope="row">L</th>
      <td>41-42</td>
      <td>116</td>
      <td>104</td>
    </tr>
  </tbody>
</table>
                                </div>
                            </div>
                            

                     
                    </div>

                </div>
                <div class="col-md" style={{ maxWidth: "410px" }}>

                    <div class="card c21" >
                        <div class="row">
                            <div class="item-title" align="left"> Demo Outfit </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class=" col c212">
                                <img class="img-fluid" alt="img" src={data[incre].modelsrc} />
                            </div>
                            
                            <div align="left">
                            <br/>
                            <center>
                            <span style={{color: "white",fontSize: "large", fontWeight: "600"}}>Fitness Percentage : 35% </span>
                                </center>
                            </div>

                        </div>
                        
                    </div>

                </div>

            </div>
      </div>
    )
  {/* return (
    <div class="container" style={{ padding: "1%" }}>
      <div class="row justify-content">
        <div
          class="col-md-6 hl1"
          style={{ paddingLeft: "5%", textAlign: "left" }}
        >
          <p>Recommended for you</p>
        </div>
      </div>

      <div class="row slc" align="right">
        <div class="col">
          <button class="btn btn-info b-ctrl" onClick={handlePrev}>
            {" "}
            <b> &#60; </b>{" "}
          </button>
          &nbsp;
          <button class="btn btn-info b-ctrl" onClick={handleNext}>
            {" "}
            <b> &#62; </b>
          </button>
        </div>
      </div>

      <div class="row justify-content-center" align="center">
        <div class="col-md " style={{ maxWidth: "410px" }}>
          <div
            class="c11"
            style={{
              marginBottom: "2%",
              marginTop: "1%",
              paddingTop: "2%",
              paddingLeft: "2%",
            }}
          >
            <div class="row">
              <div class="col c12">
                <img
                  className="img-fluid"
                  alt="img1"
                  src={data[incre].image}
                />
              </div>
              <div class="col">
                <div class="item-title" align="left">
                  {" "}
                  {data[incre].name}{" "}
                </div>
                <p class="item-desc" align="left">
                  {" "}
                  Small details about the cloth{" "}
                </p>

                <p class="item-desc" align="left">
                  {" "}
                  {data[incre].description}{" "}
                </p>

                <div align="right">
                  {" "}
                  <button class="btn btn-outline-light b-btn" onClick={handleClick}>Recommend</button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="c11"
            style={{
              marginBottom: "1%",
              marginTop: "3%",
              paddingTop: "2%",
              paddingLeft: "2%",
            }}
          >
            <div class="col c13">
              {/* <img className="img-fluid" alt="img" src={tsizechart} /> */}
              {/* <div class="table-responsive">
                <table
                  class="table table-striped"
                  style={{ textAlign: "center" }}
                >
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Collar Size</th>
                      <th scope="col">Chest Size</th>
                      <th scope="col">Waist Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">S</th>
                      <td>37-38</td>
                      <td>104</td>
                      <td>92</td>
                    </tr>
                    <tr>
                      <th scope="row">M</th>
                      <td>39-40</td>
                      <td>110</td>
                      <td>98</td>
                    </tr>
                    <tr>
                      <th scope="row">L</th>
                      <td>41-42</td>
                      <td>116</td>
                      <td>104</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md" style={{ maxWidth: "410px" }}>
          <div class="card c21">
            <div class="row">
              <div class="item-title" align="left">
                {" "}
                Demo Outfit{" "}
              </div>
            </div>
            <div class="row justify-content-center">
              <div class=" col c212">
                <img class="img-fluid" alt="img" src={modelsrc} />
              </div>

              <div align="left">
                <br />
                <center>
                  <span
                    style={{
                      color: "white",
                      fontSize: "large",
                      fontWeight: "600",
                    }}
                  >
                    Fitness Percentage : {`${fscore*100}%`}
                  </span>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); */} 
}

export default Sec3;
