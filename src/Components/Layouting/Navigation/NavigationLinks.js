/** @format */

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function NavigationLinks() {
  const [isMobile, setIsMobile] = useState(false);

  const NavLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "none",
      color: isActive ? "#e6047e" : "black",
      padding: "20px",
      // borderBottom: isActive ? '': 'underline',
    };
  };



  return (
    <>
      <nav
        className={isMobile ? "nav-links-mobile" : "nav-link"}
        onClick={() => setIsMobile(false)}
      >
        <ul className='nav-item'>
          <li className='nav-btn'>
            <NavLink to='/' style={NavLinkStyles}>
              Home
            </NavLink>
          </li>
          <li className='nav-btn'>
            <NavLink to='/alle-rezepte' style={NavLinkStyles}>
              All Recipes
            </NavLink>
          </li>
          <li className='nav-btn'>
            <NavLink to='/surprise' style={NavLinkStyles}>
              Surprise
            </NavLink>
          </li>
          <li className='nav-btn'>
            <NavLink to='/About' style={NavLinkStyles}>
              About
            </NavLink>
          </li>
          <li className='nav-btn'>
            <NavLink to='/contact' style={NavLinkStyles}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        className='mobile-menu-icon'
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className='fas fa-times'></i>
        ) : (
          <i className='fas fa-bars'></i>
        )}
      </button>
    </>
  );
}
