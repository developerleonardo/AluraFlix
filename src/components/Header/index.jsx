import './Header.css';

import React from 'react'

const Header = () => {
  return (
    <nav className='header_container'>
      <p>ALURAFLIX</p>
      <ul className='buttons_menu_container'>
        <li className='button_menu'>HOME</li>
        <li className='button_menu'>NUEVO VIDEO</li>
      </ul>
    </nav>
  )
}

export { Header }