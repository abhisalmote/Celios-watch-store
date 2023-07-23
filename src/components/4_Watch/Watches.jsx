import React from "react";
import "../4_Watch/Watches.css";
import { useState } from "react";
import All_Watches from "../Assets/Helper/AllWatch_Array";

function Watches() {
  const [btnValue, setBtnValue] = useState("Low to High");
  return (
    <div className="watch_page_container">
      <div>
        <div>
          <span>
            Home → <strong>Watches</strong>
          </span>
        </div>
        <div className="Filter_Container">
          <h3>Watches</h3>
          <div>
            <span>Sort By </span>
            <button className="btn">Trending</button>
            <button className="btn">Best Seller</button>
          </div>
        </div>
      </div>
      <div className="display_container">
        {All_Watches.map((element) => (
          <div className="description_container">
            <img src={element.thumbnail} alt="" />
            <h4>{element.name}</h4>
            <p>{element.description}</p>
            <h4>{element.price}</h4>
            <button className="tag_btn">{element.tag}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Watches;