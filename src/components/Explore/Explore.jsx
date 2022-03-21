import React from 'react'
import './Explore.css'

function Explore() {
  return (
    <>
      <div className='Explore' id='Explore'>
        <div className='header'>
          <h1>Explore</h1>
          <h2>from one-guest rooms to</h2>
          <h2>penthouses with pools and gardens</h2>
        </div>
        <div className='card-background'>
          <div className='card' style={{
              backgroundImage: 'url(https://stylesatlife.com/wp-content/uploads/2020/01/contemporary-bedroom-interior-design.jpg)'
            }}>
            <div className='description'>
              sanjay
            </div>
          </div>
          <div className='card' style={{
              backgroundImage: 'url(https://stylesatlife.com/wp-content/uploads/2020/01/contemporary-bedroom-interior-design.jpg)'
            }}>
            <div className='description'>
              sanjay
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Explore