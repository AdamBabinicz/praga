import React, { useState } from "react";
import "./Slider.css";
import ImgComp from "./ImgComp";
// import i1 from "../img/9.jpg";
// import i2 from "../img/15.jpg";
// import i3 from "../img/21.jpg";
// import i4 from "../img/25.jpg";
// import i5 from "../img/34.jpg";
// import i6 from "../img/35.jpg";
import i7 from "../img/4.jpg";
import i8 from "../img/3.jpg";
import i9 from "../img/5.jpg";
// import i10 from "../img/6.jpg";
// import i11 from "../img/8.jpg";
import i12 from "../img/11.jpg";
import i13 from "../img/14.jpg";
import i14 from "../img/20.jpg";
import i15 from "../img/38.jpg";
import i16 from "../img/41.jpg";
import i17 from "../img/43.jpg";
import i18 from "../img/16.jpg";
import i19 from "../img/19.jpg";
import i20 from "../img/32.jpg";
import i21 from "../img/37.jpg";
import i22 from "../img/39.jpg";
import i23 from "../img/42.jpg";
import i24 from "../img/44.jpg";
import i25 from "../img/45.jpg";
import i26 from "../img/24.jpg";
import i27 from "../img/26.jpg";
import i28 from "../img/27.jpg";
import i29 from "../img/28.jpg";
import i30 from "../img/31.jpg";
import i31 from "../img/46.jpg";
import i32 from "../img/18.jpg";
import i33 from "../img/29.jpg";
import i34 from "../img/7.jpg";
import i35 from "../img/17.jpg";
import i36 from "../img/22.jpg";
import i37 from "../img/30.jpg";
import i38 from "../img/36.jpg";
import i39 from "../img/23.jpg";
import i40 from "../img/47.jpg";
import i41 from "../img/48.jpg";
import i42 from "../img/49.jpg";

function Slider() {
  let sliderArr = [
    // <ImgComp src={i1} />,
    // <ImgComp src={i2} />,
    // <ImgComp src={i3} />,
    // <ImgComp src={i4} />,
    // <ImgComp src={i5} />,
    // <ImgComp src={i6} />,
    <ImgComp src={i7} />,
    <ImgComp src={i8} />,
    <ImgComp src={i9} />,
    // <ImgComp src={i10} />,
    // <ImgComp src={i11} />,
    <ImgComp src={i12} />,
    <ImgComp src={i13} />,
    <ImgComp src={i14} />,
    <ImgComp src={i15} />,
    <ImgComp src={i16} />,
    <ImgComp src={i17} />,
    <ImgComp src={i18} />,
    <ImgComp src={i19} />,
    <ImgComp src={i20} />,
    <ImgComp src={i21} />,
    <ImgComp src={i22} />,
    <ImgComp src={i23} />,
    <ImgComp src={i24} />,
    <ImgComp src={i25} />,
    <ImgComp src={i26} />,
    <ImgComp src={i27} />,
    <ImgComp src={i28} />,
    <ImgComp src={i29} />,
    <ImgComp src={i30} />,
    <ImgComp src={i31} />,
    <ImgComp src={i32} />,
    <ImgComp src={i33} />,
    <ImgComp src={i34} />,
    <ImgComp src={i35} />,
    <ImgComp src={i36} />,
    <ImgComp src={i37} />,
    <ImgComp src={i38} />,
    <ImgComp src={i39} />,
    <ImgComp src={i40} />,
    <ImgComp src={i41} />,
    <ImgComp src={i42} />,
  ];

  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <>
      {/* <h3 className="cont">Foto</h3> */}
      <div className="slider">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              {item}
            </div>
          );
        })}
        <button id="goLeft" className="btn" onClick={goLeft}>
          <i className="fa fa-chevron-left"></i>
        </button>
        <button id="goRight" className="btn" onClick={goRight}>
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>
    </>
  );
}

export default Slider;
