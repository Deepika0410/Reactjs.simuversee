import React, { useState, useRef, useEffect } from "react";
import "./sec2.css";
import { NavLink,useNavigate } from "react-router-dom";
import ItemsData from "./itemsData";
import axios from "axios";
import { UseCart } from "../../context-api-setup/CartContext";

function Sec2() {
  const [noOfElements, setNoOfElements] = useState(3);
  const [button, setButton] = useState("View More");
  const { itemsState, itemsDispatch } = UseCart();
  const maxId = itemsState.length;
  const slice = itemsState.slice(0, noOfElements);
  const url = "https://sv-be.spandeep.in/product/";
const Url = "http://localhost:3000/product/";

  console.log(maxId);
  useEffect(() => {
    axios
      .get(Url)
      .then((resp) => {
        itemsDispatch({ type: "GET_ITEMS", payload: resp.data });
      })
      .catch((err) => console.log(err));
  }, []);

  const loadMore = () => {
    if (noOfElements === 3) {
      setNoOfElements(noOfElements + 3);
      setButton("View All");
    } else if (noOfElements === 6) {
      setNoOfElements(noOfElements + (maxId - 6));
      setButton("View less");
    } else if (noOfElements === maxId) {
      setButton("View More");
      setNoOfElements(noOfElements - (noOfElements - 3));
    }
  };
  const navigate=useNavigate();
  return (
    <div class="container con1">
      <br />
      <div class="row justify-content-center">
        <div class="col-md-12 hl1"> Trending </div>

        <div class="col-md-8 txt1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          imperdiet nisi ut lorem ornare sollicitudin. Fusce eget quam purus
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
                {" "}
                <div className="card-img">
                  <img
                    src={`https://sv-be.spandeep.in/${item.image}`}
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
      <div class="row justify-content-center">
        <div class="col-sm">
          <button class="butnvw" onClick={loadMore}>
            {button}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sec2;
