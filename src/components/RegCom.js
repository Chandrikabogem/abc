import React, { Component } from 'react'

 class RegCom extends Component {
  render() {
      console.log("regular component")
    return (
      <div>
        Regular Component {this.props.message}
      </div>
    )
  }
}

export default RegCom
