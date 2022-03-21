import React from 'react'
import NavbarContents from './NavbarContents'
import './Navbar.css'

function Navbar({color}) {
  return (
    <div className='Navbar'>
      <div className='left'>logo</div>
      <div className='center'><NavbarContents color={color} /></div>
      {/* <div className='right'>menu</div> */}
    </div>
  )
}

export default Navbar