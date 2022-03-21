import React from 'react'
import Navbar from '../Navbar/Navbar'
import './About.css'
import { LandScapeCard, PortraitCard } from './Atoms'

function About() {
  return (
    <div className='About' id='About'>
      <div className='header'>
        <h1>About Us</h1>
        <h2>Allow us to tell a short story....</h2>
      </div>
      <div className='about_card'>
        <LandScapeCard
          width='30vw'
          height='40vh'
          backgroundImage='https://5.imimg.com/data5/HR/KX/MY-3103040/villa-interior-design-500x500.jpg'
          chapterNumber={1}
          description='We have started as a small team of 5. Now,
          we are a Multi National Company'
        />
        <LandScapeCard
          width='35vw'
          height='40vh'
          backgroundImage='http://cdn.home-designing.com/wp-content/uploads/2014/05/3-Contemporary-villa-interior.jpg'
          chapterNumber={2}
          description='We provide all the varieties of rentals from Apartments
          to Villas'
        />
        <PortraitCard
          width='30vw'
          backgroundImage='https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&w=1000&q=80'
          chapterNumber={3}
          description='Stay now and pay later, with our EMI option'
        />
        <PortraitCard
          width='35vw'
          backgroundImage='https://archello.s3.eu-central-1.amazonaws.com/images/2018/01/31/CASModernClassicVillaInteriorDesign3.1517361007.0961.jpg'
          chapterNumber={4}
          description='From the same town to over the seas, we are ready to
          servev you anywhere'
        />
      </div>
      <div className='about_footer' >
        <Navbar color='black' />
      </div>
    </div>
  )
}

export default About