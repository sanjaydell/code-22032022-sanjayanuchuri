import React from 'react'
import './Explore.css'

function Explore() {
  return (
    <>
      <div className='explore' id='Explore'>
        <div className='header'>
          <h1>Explore</h1>
          <h2>from one-guest rooms to</h2>
          <h2>penthouses with pools and gardens</h2>
        </div>
        <div className='card_background'>
          <div className='card' style={{
              backgroundImage: 'url(https://stylesatlife.com/wp-content/uploads/2020/01/contemporary-bedroom-interior-design.jpg)'
            }}>
            <div className='description'>
              <div className='description_header'>
                <h3>Room with 1 king-size bed</h3>
                <div className='footer'>
                  <div className='button'>
                    35$
                  </div>
                  <div className='button'>
                    28M<sup>2</sup>
                  </div>
              </div>
              </div>
              <div className='book'>
                Book!
              </div>   
            </div>
          </div>
          <div className='card' style={{
              backgroundImage: 'url(https://linesmag.com/wp-content/uploads/2019/10/courtesy-of-Nina-Maya-Interiors-Vaucluse-Residence_Linesmag_1-1170x780.jpg)'
            }}>
              <div className='description'>
              <div className='description_header'>
                <h3>Penthouse for 8 persons</h3>
                <div className='footer'>
                  <div className='button'>
                    2039$
                  </div>
                  <div className='button'>
                    438M<sup>2</sup>
                  </div>
              </div>
              </div>
              <div className='book'>
                Book!
              </div>   
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Explore