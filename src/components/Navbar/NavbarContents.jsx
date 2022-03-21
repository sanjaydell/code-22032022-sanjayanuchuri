import React from 'react'

const NavbarContents = () => {
  return (
    <>
      <a href='#Explore' className='options'>Explore</a>
      <a href='#About' className='options'>About Us</a>
      <a className='options'>Cities</a>
      <a className='options' style={{ borderStyle: 'solid', padding: '0.5rem 3.5rem', borderRadius: '20px'}}>Call</a>
    </>
  )
}

export default NavbarContents