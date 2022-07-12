import React, { useState, useRef, useEffect } from "react";
import "./sec2.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { UseCart } from "../../context-api-setup/CartContext";

function Sec2() {
  const [readMore, setReadMore] = React.useState(false);
  const [noOfElements, setNoOfElements] = useState(3);
  const [button, setButton] = useState("View More");
  const { itemsState, itemsDispatch } = UseCart();
  const maxId = itemsState.length;
  // const slice = itemsState.slice(0, noOfElements);
  const slice = itemsState;

  const url = `${process.env.REACT_APP_SV_BACKEND}/product/`;
  const Url = `https://sv-be.spandeep.in/product`;

  console.log(maxId);
  useEffect(() => {
    axios
      .get(Url)
      .then((resp) => {
        itemsDispatch({ type: "GET_ITEMS", payload: resp.data });
      })
      .catch((err) => console.log(err));
  }, []);


  const linkName = readMore ? 'View Less ' : 'View all'
  const navigate = useNavigate();
  const extraContent = <div>
    <div className="extra-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab
      porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero
      commodi officia aliquam! Maxime.
    </div>
  </div>
  
  if(!slice.length){
    return <div className="loading">Loading...</div>
  }
  return (
    <div class="container con1">
      <br />
      <div class="row justify-content-center">
        <div class="col-md-12 hl1 " style={{ textAlign: "center" }}> Trending </div>

        <div class="col-md-8 txt1">
          Some of the most trending items on SimuVerse.
        </div>
      </div>
      <br />
      <div className="card-container"></div>
      <div className="store_card-container" align="center">
        {slice.map((item, key) => {
          return (
            <div className="col-sm display-cards">
              <NavLink
                to={"/store/product"}
                //onClick={()=>{
                //  localStorage.setItem("productid",item.id)
                //  navigate("/store/product");
                //}}
                state={{ title: item.name, id: item.id }}
              >
                {/* {" "} */}
                <div className="card-img">
                  <img
                    src={`${item.image}`}
                    alt="img"
                    className="card-img1"
                  />
                </div>
              </NavLink>

              <div id={item.id}>
                <p className="item_title" align="center">
                  {" "}
                  {item.name}{" "}
                </p>
                <p className="item_desc" align="center">
                  {" "}
                  {item.description}{" "}
                </p>
                <div className="row">
                  <div className=" col-sm item_review" align="left">
                    {" "}
                    {item?.rating}{" "}
                  </div>
                  <div className="col-sm item_price" align="left">
                    {" "}
                    {item.price}{" "}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br />

      {/* <div class="row justify-content-center">
        <div class="col-sm">
          <button class="butnvw" onClick={()=>{setReadMore(!readMore)}}>
            {linkName}
          </button>
        </div>
        {readMore && extraContent}
      </div> */}
    </div>
  );
}

export default Sec2;
