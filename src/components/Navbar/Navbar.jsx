import React from 'react'
import NavbarContents from './NavbarContents'
import './Navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
      <div className='left'>logo</div>
      <div className='center'><NavbarContents /></div>
      <div className='right'>menu</div>
    </div>
  )
}

export default Navbar