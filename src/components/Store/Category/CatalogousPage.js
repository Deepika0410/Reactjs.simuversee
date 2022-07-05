import MenuItem from "antd/lib/menu/MenuItem";
import React, { useState } from "react";
import { useLocation, Link,NavLink,useNavigate } from "react-router-dom";
// import itemsData from "../itemsData";
import { UseCart } from "../../../context-api-setup/CartContext";
import "./CatalogousPage.css";

const Catalogous = () => {
  const location = useLocation();
  const { category, type } = location.state;
  const { itemsState } = UseCart();

  // const allCategories = [...new Set(itemsData.map((i) => i.category))];
  // const allTypes = [...new Set(itemsData.map((i) => i.type))];

  const [dressMenu, setDressMenu] = useState(itemsState);
  


  const newItems = dressMenu.filter(
    (i) =>
      i.category === category &&
      i.type === type
  );

  return (
    <div>
      <Link to="/store">
        <h3 style={{ marginTop: "2rem" }}>Back to store</h3>
      </Link>
      <h1 className="catalogue_Heading">
        {category.toUpperCase()} {type.toUpperCase()}
      </h1>
      <div>
        <>
          {newItems.length ? (
            <div className="catalogue_Container">
              {newItems.map((i) => {
                const {
                  id,
                  category,
                  type,
                  image,
                   name,
                  description,
                  title,
                  desc,
                  color,
                  rating,
                  price,
                  recommended,
                } = i;
                return (
                  <div className="catalogue_items">
                       <NavLink
                to={"/store/product"}
               
                state={{ title:name, id:id }}
              >
                    <img src={image} alt="/" />
                       </NavLink>
                    <div className="d-flex justify-content-between">
                      <h3>{name}</h3>
                      <h3 style={{ fontWeight: "800" }}>{rating}</h3>
                    </div>
                    <div className="d-flex justify-content-between">
                      <h3>Offer Price</h3>
                      <h3 style={{ fontWeight: "800" }}>{price}</h3>
                    </div>
                    <h3 className="description">{description}</h3>
                  </div>
                );
              })}
            </div>
          ) : (
            <h3 className="inventory_None">
              None of the Items are left in Inventory.{" "}
              <span> Please select other items...!</span>
            </h3>
          )}
        </>
      </div>
    </div>
  );
};

export default Catalogous;
