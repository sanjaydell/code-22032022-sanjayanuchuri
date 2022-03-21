import React from 'react'
import './Home.css'
import { Block, SearchBlock } from './Atoms'
import Navbar from '../Navbar/Navbar'

function Home() {
  return (
      <div
        className='Home'
        id='Home'
        style={{ backgroundImage: 'url(/villa.jpg)' }}
      >
        <div className='Topbar'>
          <Navbar />
        </div>
        <div className='Main'>
          <h1>Rethink your</h1>
          <h1>living & renting</h1>
          <h2>Make your stay painless with us</h2>
        </div>
        <div className='Footer'>
          <Block header='CITY' body='Select your city'/>
          <Block header='DATES' body='Select your dates'/>
          <Block header='GUESTS' body='Add guests'/>
          <SearchBlock />
        </div>
      </div>
  )
}

export default Home