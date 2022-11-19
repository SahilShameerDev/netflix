import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">MyList</button>
        </div>
        <p className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
          facilis quia, fugiat modi velit fugit reprehenderit reiciendis
          consequuntur itaque sed molestiae repellat, tempore debitis vel
          numquam ipsum optio veritatis minus?
        </p>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
