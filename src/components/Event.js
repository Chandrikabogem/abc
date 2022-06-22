import React, { Component } from 'react'

 class Event extends Component {
 constructor(){
     super()
     this.state={
         message:"helloooo"
     }
     this.changeState=this.changeState.bind(this)
 }
 changeState(){
     this.setState({
         message:"good bye!"
     })
 }
 
  render() {
    return (
      <div>
          <h1 >{this.state.message}</h1>
       {/*  <button onClick={()=>this.changeState()}>Click</button> */}
        <button onClick={this.changeState}>Click</button>
      </div>
    )
  }
}

export default Event
