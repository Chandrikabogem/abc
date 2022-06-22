import React from 'react'
import './Style.css'

var obj={
    color:"green",
    fontSize:"50px",

}

function Style() {
    
  return (
    <div>
      <h1 className='primary'>Helloo</h1>
      <p style={obj}>Hii</p>
    </div>
  )
}

export default Style
