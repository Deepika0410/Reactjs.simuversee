import React, { useEffect, useState } from "react";
import "./Search.css";
import { UseCart } from "../../context-api-setup/CartContext";
const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState();
  const { itemsState, itemsDispatch } = UseCart();
  useEffect(() => {
    console.log(searchInput, "searchInput");
    if (searchInput) {
      const filteredData = itemsState.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
      console.log(filteredData.length, "useeffect");
    }
  }, [searchInput]);

  return (
    <div className="search_Main_Con">
      <label className="searchLabel">Search Items Here...!</label>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="search here.."
      />
      {console.log(filteredResults?.length, "final")}
      {filteredResults?.length > 0 ? (
        <div className="search_Container">
          {filteredResults?.map((i) => {
            return (
              <div className="search_items" key={i.id}>
                <img src={`${i.image}`} alt="/" />
                <div className="d-flex justify-content-between">
                  <h3>{i.name}</h3>
                  <h3 style={{ fontWeight: "800" }}>{"4.5/5"}</h3>
                </div>
                <div className="d-flex justify-content-between">
                  <h3>Offer Price</h3>
                  <h3 style={{ fontWeight: "800" }}>{i.price}</h3>
                </div>
                <h3 className="description">{i.description}</h3>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="search_Container">
          {itemsState?.map((i) => {
            return (
              <div className="search_items" key={i.id}>
                <img src={`${i.image}`} alt="/" />
                <div className="d-flex justify-content-between">
                  <h3>{i.name}</h3>
                  <h3 style={{ fontWeight: "800" }}>{"4.5/5"}</h3>
                </div>
                <div className="d-flex justify-content-between">
                  <h3>Offer Price</h3>
                  <h3 style={{ fontWeight: "800" }}>{i.price}</h3>
                </div>
                <h3 className="description">{i.description}</h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
