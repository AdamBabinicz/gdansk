import React, { useState } from "react";
import "./Slider.css";
import ImgComp from "./ImgComp";
import i1 from "../img/foty/1.jpg";
import i2 from "../img/foty/2.jpg";
import i3 from "../img/foty/3.jpg";
import i4 from "../img/foty/4.jpg";
import i5 from "../img/foty/5.jpg";
import i6 from "../img/foty/6.jpg";
import i7 from "../img/foty/7.jpg";
import i8 from "../img/foty/8.jpg";
import i9 from "../img/foty/9.jpg";
import i10 from "../img/foty/10.jpg";
import i11 from "../img/foty/11.jpg";
import i12 from "../img/foty/12.jpg";
import i13 from "../img/foty/13.jpg";
import i14 from "../img/foty/14.jpg";
import i15 from "../img/foty/15.jpg";
import i16 from "../img/foty/16.jpg";
import i17 from "../img/foty/17.jpg";
import i18 from "../img/foty/18.jpg";
import i19 from "../img/foty/19.jpg";
import i20 from "../img/foty/20.jpg";
import i21 from "../img/foty/21.jpg";
import i22 from "../img/foty/22.jpg";
import i23 from "../img/foty/23.jpg";
import i24 from "../img/foty/24.jpg";
import i25 from "../img/foty/25.jpg";
import i26 from "../img/foty/26.jpg";
import i27 from "../img/foty/27.jpg";
import i28 from "../img/foty/28.jpg";
import i29 from "../img/foty/29.jpg";
import i30 from "../img/foty/30.jpg";
import i31 from "../img/foty/31.jpg";
import i32 from "../img/foty/32.jpg";
import i33 from "../img/foty/33.jpg";
import i34 from "../img/foty/34.jpg";
import i35 from "../img/foty/35.jpg";
import i36 from "../img/foty/36.jpg";
import i37 from "../img/foty/37.jpg";
import i38 from "../img/foty/38.jpg";
import i39 from "../img/foty/39.jpg";
import i40 from "../img/foty/40.jpg";
import i41 from "../img/foty/41.jpg";
import i42 from "../img/foty/42.jpg";
import i43 from "../img/foty/43.jpg";
import i44 from "../img/foty/44.jpg";
import i45 from "../img/foty/45.jpg";
import i46 from "../img/foty/46.jpg";
import i47 from "../img/foty/47.jpg";

function Slider() {
  let sliderArr = [
    <ImgComp src={i1} />,
    <ImgComp src={i2} />,
    <ImgComp src={i3} />,
    <ImgComp src={i4} />,
    <ImgComp src={i5} />,
    <ImgComp src={i6} />,
    <ImgComp src={i7} />,
    <ImgComp src={i8} />,
    <ImgComp src={i9} />,
    <ImgComp src={i10} />,
    <ImgComp src={i11} />,
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
    <ImgComp src={i43} />,
    <ImgComp src={i44} />,
    <ImgComp src={i45} />,
    <ImgComp src={i46} />,
    <ImgComp src={i47} />,
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
      <div className="slider" id="/galeria">
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
