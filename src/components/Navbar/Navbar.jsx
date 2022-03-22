import React from 'react'
import NavbarContents from './NavbarContents'
import './Navbar.css'

function Navbar({color}) {
  return (
    <div className='Navbar'>
      <div className='left'><h1 style={{ color: `${color}`}}>Renteasy</h1></div>
      <div className='center'><NavbarContents color={color} /></div>
      <div class='right'>
        <img src='menu.png' />
        <div class='dropdown_content'>
          <NavbarContents color={color} />
        </div>
      </div>
    </div>
  )
}

export default Navbar