import React from 'react'

const NavbarContents = ({color}) => {
  console.log(color)

  return (
    <>
      <a href='#Explore' className='options' style={{color: `${color}`}}>Explore</a>
      <a href='#About' className='options' style={{color: `${color}`}}>About Us</a>
      <a className='options' style={{color: `${color}`}}>Cities</a>
      <a className='options' style={{ borderStyle: 'solid', padding: '0.5rem 3.5rem', borderRadius: '20px', color: `${color}`}}>Call</a>
    </>
  )
}

export default NavbarContents