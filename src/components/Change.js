import React from 'react'
var obj={
//name:"chandu"
}
function  changeName() {
   obj. name="sahithi"

        }

function Change() {
   
  return (
    <div >
      <h1>{obj.name}</h1>
      <button onClick={changeName()}>Change</button>
    </div>
  )
}

export default Change
