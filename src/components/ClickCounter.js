import React, { Component } from 'react'
//import DCounter from '../withCounter'
//import RenderCom from '../RenderCom'

 class ClickCounter extends Component {
    

  render() {
    const {count,increment}=this.props
    return (
      <button onClick={increment}>
        Increase {count} times
      </button>
    )
  }
}

export default /*  DCounter */(ClickCounter)
