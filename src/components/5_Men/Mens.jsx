import React from "react";
import "../5_Men/Mens.css";
import Mens_Watches from "../Assets/Helper/MensWatchArray";
import Men_Banner from "../Assets/Images/All-Images/Men-Banner.png";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

function Mens() {
  const [watchlist, setWatchList] = useState(Mens_Watches);
  const [btnActive1, setBtnActive1] = useState(false);
  const [btnActive2, setBtnActive2] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  function filterList(btnName) {
    setActiveButton(btnName);
    if (btnName === "Trending") {
      setActiveButton(btnName);
      if (!btnActive1) {
        const filteredList = Mens_Watches.filter(
          (index) => index.tag === btnName
        );
        setActiveButton(btnName);
        setBtnActive1(true);
        setWatchList(filteredList);
      } else {
        setActiveButton(null);
        setBtnActive1(false);
        setWatchList(Mens_Watches);
      }
    } else if (btnName === "New Arrival") {
      setActiveButton(btnName);
      if (!btnActive2) {
        const filteredList = Mens_Watches.filter(
          (index) => index.tag === btnName
        );
        setActiveButton(btnName);
        setBtnActive2(true);
        setWatchList(filteredList);
      } else {
        setActiveButton(null);
        setBtnActive2(false);
        setWatchList(Mens_Watches);
      }
    } else {
      setWatchList(Mens_Watches);
    }
  }
  return (
    <div className="watch_page_container">
      <ScrollToTop />
      <img id="Banner" src={Men_Banner} alt="" />
      <div>
        <div className="sub_page_tag">
          <span>
            Home → <strong>Watches</strong>
          </span>
        </div>
        <div className="Filter_Container">
          <h3>Watches</h3>
          <div>
            <span>Sort By </span>
            <button
              onClick={() => filterList("Trending")}
              className={activeButton === "Trending" ? "btn active" : "btn"}
            >
              Trending
            </button>
            <button
              onClick={() => filterList("New Arrival")}
              className={activeButton === "New Arrival" ? "btn active" : "btn"}
            >
              New Arrival
            </button>
          </div>
        </div>
      </div>
      <div className="display_container">
        {watchlist.map((element) => (
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

export default Mens;
