import React from 'react'

function Person({person}) {
  return (
    <div>
      <h1 className='primary'></h1>
      <h2>{person.name}</h2>
    </div>
  )
}

export default Person
