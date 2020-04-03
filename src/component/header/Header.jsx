import React from "react";
import covid19logo from "../../images/covid19_logo.jpg";
//import "../../styles.scss";
export const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <img align="left" className="logo" alt="logo" src={covid19logo}></img>

        <label className="logoName">COVID-19 status</label>
        <img align="right" className="logo" alt="logo" src={covid19logo}></img>
      </div>
    </div>
  );
};
