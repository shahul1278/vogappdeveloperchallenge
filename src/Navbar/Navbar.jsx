import React from "react";
import { useState } from "react";
import { Menu } from "./Menu";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setclicked] = useState(false);
  const onIconClick = () => {
    setclicked(!clicked);
  };


  
  return (
    <>
      <nav className="NavbarItems">
        <a href="http://localhost:3000/">
          <h1 className="navbar-logo">
            VOG App Challenge
            <i class="fab fa-react"></i>
          </h1>
        </a>
        <div className="menu-icon" onClick={onIconClick}>
          <i
            className={clicked ? "fa fa-times" : "fa fa-align-right"}
            aria-hidden="true"
          ></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {Menu.map((item, i) => {
            return (
              <li key={i}>
                <a className={item.className} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
