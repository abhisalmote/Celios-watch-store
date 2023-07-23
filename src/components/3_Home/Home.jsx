import React from "react";
import "../3_Home/Home.css";
import Main_Banner from "../Assets/Images/All-Images/Banner-Main.png";
import Mens_Poster from "../Assets/Images/All-Images/Men-Poster.webp";
import Womens_Poster from "../Assets/Images/All-Images/Women-Poster.webp";
import Blog_1 from "../Assets/Images/All-Images/Blog-1.jpg";
import Blog_2 from "../Assets/Images/All-Images/Blog-2.jpg";
import Blog_3 from "../Assets/Images/All-Images/Blog-3.jpg";

function Home() {
  return (
    <div className="Home_Container">
      <div>
        <img id="Main_Banner" src={Main_Banner} alt="Main Banner" />
      </div>
      <div className="Poster_Container">
        <div>
          <img src={Mens_Poster} alt="Mens Poster" />
        </div>
        <div>
          <img src={Womens_Poster} alt="Womens Poster" />
        </div>
      </div>
      <div className="Blog_Container">
        <div className="Blog">
          <img src={Blog_1} alt="Blog 1 Poster" />
          <h4>Vintage Rally Collection | Helios</h4>
        </div>
        <div className="Blog">
          <img src={Blog_2} alt="Blog 2 Poster" />
          <h4>Slimline Ladies Collection | Helios</h4>
        </div>
        <div className="Blog">
          <img src={Blog_3} alt="Blog 3 Poster" />
          <h4>Run About Collection | Helios</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
