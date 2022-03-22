import React from "react";
import './Home.css'

export const Block = ({ header, body}) => {
  return(
    <div className='Block'>
      <h5>{header}</h5>
      <h3>{body}</h3>
    </div>
  )
}

export const SearchBlock = () => {
  return(
    <div className='SearchBlock'>
      <img src='search.svg' alt='' />
      <h5>Search</h5>
    </div>
  )
}
