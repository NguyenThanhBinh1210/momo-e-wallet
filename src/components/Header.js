import React from "react";
import "./styles/header.css";
import logo from "../images/Logo-MoMo-Square.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container header" >
        <div className="header-nav">
          <img className="logo" src={logo} alt="" />
          <h5 className="header-nav-title">Cổng thanh toán MoMo</h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
