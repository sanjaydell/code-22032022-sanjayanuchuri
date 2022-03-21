import React from "react";
import './Home.css'

export const Block = ({ header, body}) => {
  return(
    <div className='Block'>
      <h5 style={{ margin: '0px', left: '0', width: '100%', float: 'left', paddingTop: '5px' }}>{header}</h5>
      <h3>{body}</h3>
    </div>
  )
}

export const SearchBlock = () => {
  return(
    <div className='SearchBlock'>
    </div>
  )
}
