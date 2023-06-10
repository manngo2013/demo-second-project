import React from "react";
import "./Header.scss";

function Header(props) {
  return (
    <div className="menu-wrapper">
      <div className="menu-nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Our Works</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Carrers</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
