import React,{useState} from "react";
import "./sec1.css";
import { NavLink } from "react-router-dom";
import StoreMenu from '../../images/store_menu.svg'

function Sec1() {
  const [display,setDisplay] = useState(false);
  const handleClick = () =>{
    setDisplay(!display)
  }
  return (
    <div className="container-fluid megamenu">
      <div className="container mm1">
        <div className="row" align="left">
          <div className="hl1">Menu
          </div>
          <div className="store_icon">
            <img src={StoreMenu} onClick={handleClick} alt='menu' />
          </div>

        </div>
        <div className="row justify-content-center collapse_store_menu">
          <div className="col-sm cat-menu ">
            <p className={`cat-title men_item ${display?"p_display":"p_hidden"}`}>Men</p>
            <ul className="menu-ul men_ul" >
              <NavLink
                to={"/store/categories"}
                state={{ category: "men", type: "tshirts" }}
              >
                <li>T-Shirts</li>
              </NavLink>
              <NavLink
                to={"/store/categories"}
                state={{ category: "men", type: "jackets" }}
              >
                <li>Jacket</li>
              </NavLink>
              <NavLink
                to={"/store/categories"}
                state={{ category: "men", type: "jeans" }}
              >
                <li>Jeans</li>
              </NavLink>
              <NavLink
                to={"/store/categories"}
                state={{ category: "men", type: "sweaters" }}
              >
                <li>Sweaters</li>
              </NavLink>
            </ul>
          </div>
          <div class="col-sm cat-menu ">
            <p class={`cat-title women_item ${display?"p_display":"p_hidden"}`}>Women</p>
            <ul class="menu-ul women_ul">
              <NavLink
                to={"/store/categories"}
                state={{ category: "women", type: "dresses" }}
              >
                <li>Dresses</li>
              </NavLink>
              <NavLink
                to={"/store/categories"}
                state={{ category: "women", type: "tops" }}
              >
                <li>Tops</li>
              </NavLink>
              <NavLink
                to={"/store/categories"}
                state={{ category: "women", type: "tshirts" }}
              >
                <li>T-Shirts</li>
              </NavLink>
              <NavLink
                to={"/store/categories"}
                state={{ category: "women", type: "jeans" }}
              >
                <li>Jeans</li>
              </NavLink>
            </ul>
          </div>
          <div class="col-sm cat-menu items_menu">
            <p class={`cat-title kids_item ${display?"p_display":"p_hidden"}`}>Kids</p>
            <ul class="menu-ul kids_ul">
              <NavLink
                to={"/store/categories"}
                state={{ category: "kids", type: "tshirts" }}
              >
                <li>T-shirts</li>
              </NavLink>
              <NavLink
                to={"/store/categories"}
                state={{ category: "kids", type: "shirts" }}
              >
                <li>Shirts</li>
              </NavLink>
              <NavLink
                to={"/store/categories"}
                state={{ category: "kids", type: "jeans" }}
              >
                <li>Jeans</li>
              </NavLink>
              <NavLink
                to={"/store/categories"}
                state={{ category: "kids", type: "dresses" }}
              >
                <li>Dresses</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
      {/* <CustomNav /> */}
    </div>
  );
}

export default Sec1;
