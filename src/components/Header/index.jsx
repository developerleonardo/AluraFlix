import { NavLink } from 'react-router-dom';
import './Header.css';

import React from 'react'

const Header = () => {
  let activeStyle = {
    borderBottom: "2px solid var(--blue)",
    padding: "4px 0",
    textAlign: "center",
    fontWeight: "bold",
    color: "var(--blue)",
    textDecoration: "none"
  }
  let button_menu = {
    color: "var(--white)",
    padding: "0 16px",
    textAlign: "center",
    fontWeight: "bold",
    textDecoration: "none"
  }

  return (
    <nav className='header_container'>
      <p>ALURAFLIX</p>
      <ul className='buttons_menu_container'>
        <li className='li' >
          <NavLink to='/' style={({ isActive }) => isActive ? activeStyle : button_menu}>
            HOME
          </NavLink>
        </li>
        <li className='li'>
          <NavLink to='/nuevo-video' style={({ isActive }) => isActive ? activeStyle : button_menu}>
            NUEVO VIDEO
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export { Header }