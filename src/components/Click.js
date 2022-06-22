import React, { Component } from 'react'

export class Click extends Component {

 click(){
console.log("this button is clicked")
}

  render() {
    return (
      <div>
        <button onClick={this.click}>Click</button>
      </div>
    )
  }
}

export default Click
