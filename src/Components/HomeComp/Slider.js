import React from "react";

function Slider() {
  return (
    <div className="slideshow single-slider owl-carousel">
      <div className="item">
        <a href="#/">
          <img
            className="img-responsive"
            src="image/slider/banner-2.jpg"
            alt="banner 2"
          />
        </a>
      </div>
      <div className="item">
        <a href="#/">
          <img
            className="img-responsive"
            src="image/slider/banner-1.jpg"
            alt="banner 1"
          />
        </a>
      </div>
    </div>
  );
}

export default Slider;
