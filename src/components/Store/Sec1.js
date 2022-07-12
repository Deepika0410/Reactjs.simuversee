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
          <div>
    
<nav aria-label="breadcrumb">
  <ol class="breadcrumb"  >
    <li class="breadcrumb-item " style={{color:"#ffffff"}}><a href="/simuverse">Home</a></li>
    <li class="breadcrumb-item "><a href="#">Store</a></li>
 
  </ol>
</nav>
          </div>
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
                state={{ category: "Men", type: "Tshirts" }}
              >
                <li>T-Shirts</li>
              </NavLink>
              <NavLink
                to={"/store/categories"}
                state={{ category: "Men", type: "Jackets" }}
              >
                <li>Jacket</li>
              </NavLink>
              <NavLink
                to={"/store/categories"}
                state={{ category: "Men", type: "Jeans" }}
              >
                <li>Jeans</li>
              </NavLink>
              <NavLink
                to={"/store/categories"}
                state={{ category: "Men", type: "Sweaters" }}
              >
                <li>Sweaters</li>
              </NavLink>
            </ul>
          </div>
          <div className="col-sm cat-menu ">
            <p className={`cat-title women_item ${display?"p_display":"p_hidden"}`}>Women</p>
            <ul className="menu-ul women_ul">
              <NavLink
                to={"/store/categories"}
                state={{ category: "Women", type: "Dresses" }}
              >
                <li>Dresses</li>
              </NavLink>
              <NavLink
                to={"/store/categories"}
                state={{ category: "Women", type: "Tops" }}
              >
                <li>Tops</li>
              </NavLink>
              <NavLink
                to={"/store/categories"}
                state={{ category: "Women", type: "Tshirts" }}
              >
                <li>T-Shirts</li>
              </NavLink>
              <NavLink
                to={"/store/categories"}
                state={{ category: "Women", type: "Jeans" }}
              >
                <li>Jeans</li>
              </NavLink>
            </ul>
          </div>
          <div className="col-sm cat-menu items_menu">
            <p className={`cat-title kids_item ${display?"p_display":"p_hidden"}`}>Kids</p>
            <ul className="menu-ul kids_ul">
              <NavLink
                to={"/store/categories"}
                state={{ category: "Kids", type: "Tshirts" }}
              >
                <li>T-shirts</li>
              </NavLink>
              <NavLink
                to={"/store/categories"}
                state={{ category: "Kids", type: "Shirts" }}
              >
                <li>Shirts</li>
              </NavLink>
              <NavLink
                to={"/store/categories"}
                state={{ category: "Kids", type: "Jeans" }}
              >
                <li>Jeans</li>
              </NavLink>
              <NavLink
                to={"/store/categories"}
                state={{ category: "Kids", type: "Dresses" }}
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
