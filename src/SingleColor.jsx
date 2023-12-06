import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb,weight, index }) => {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFlag(false);
    }, 1500);
  },[flag]);
  function copyToClipboard(event) {
    navigator.clipboard.writeText(event.target.dataset.hex);
    setFlag(true);
  }
  let r = rgb[0];
  let g = rgb[1];
  let b = rgb[2];
  let myHex = rgbToHex(r, g, b);
  return (
    <>
      <article
        className="color"
        data-hex={myHex}
        style={{
          backgroundColor: `${myHex}`,
          color: index > 10 ? "white" : "black",
        }}
        onClick={copyToClipboard}
      >
      <p>{myHex}</p> 
      <p className="percentValue">{weight}%</p>
      {flag && <p className="alert">copied</p>}
      </article>
    </>
  );
};

export default SingleColor;
