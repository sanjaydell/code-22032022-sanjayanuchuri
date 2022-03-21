export const LandScapeCard = ({ width, chapterNumber, height, description, backgroundImage }) => {
  return(
    <div className='card_background' style={{
      width: `${width}`,
      height: `${height}`,
      backgroundImage: `url(${backgroundImage})`
    }}>
      <div className='about_description'>
        <div className='about_description_header'>
          <h3>Chapter {chapterNumber}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export const PortraitCard = ({ width, chapterNumber, description, backgroundImage }) => {
  return(
    <div className='card_background' style={{
      width: `${width}`,
      height: '70vh',
      backgroundImage: `url(${backgroundImage})`
    }}>
      <div className='about_description' style={{ marginTop: '30vh'}}>
        <div className='about_description_header'>
          <h3>Chapter {chapterNumber}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}