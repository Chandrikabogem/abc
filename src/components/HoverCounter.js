import React, { Component } from 'react'
//import DCounter from '../withCounter'
//import Render from '../RenderCom'

 class HoverCounter extends Component {
    
     
  render() {
      const {count,increment}=this.props
    return (
      <h1 onMouseOver={increment}>
        Increment {count} times
      </h1>
    )
  }
}

export default /* DCounter */(HoverCounter)
