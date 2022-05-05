import MenuItem from "antd/lib/menu/MenuItem";
import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import itemsData from "../itemsData";
import "./CatalogousPage.css";

const Catalogous = () => {
  const location = useLocation();
  const { category, type } = location.state;
  const allCategories = [...new Set(itemsData.map((i) => i.type))];
  const [dressMenu, setDressMenu] = useState(itemsData);
  // const [categories, SetCategories] = useState(allCategories);

  //   const newMenu = (itemsData.filter = (i) => {
  //     return i.type;
  //   });
  //   setDressMenu(newItems);

  const newItems = dressMenu.filter(
    (i) =>
      i.category.toUpperCase() === category.toUpperCase() &&
      i.type.toUpperCase() === type.toUpperCase()
  );
  // .filter((t) => t.type === type);

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
                  src,
                  title,
                  desc,
                  color,
                  rating,
                  price,
                  recommended,
                } = i;
                return (
                  <div className="catalogue_items">
                    <img src={src} alt="/" />
                    <div className="d-flex justify-content-between">
                      <h3>{title}</h3>
                      <h3 style={{ fontWeight: "800" }}>{rating}</h3>
                    </div>
                    <div className="d-flex justify-content-between">
                      <h3>Offer Price</h3>
                      <h3 style={{ fontWeight: "800" }}>{price}</h3>
                    </div>
                    <h3 className="description">{desc}</h3>
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
