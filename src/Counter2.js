import React, { Component } from 'react'

 class Counter2 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      
      increment=()=>{
          this.setState(previous=>{
  return {count:previous.count+1}
          })
      }
  render() {
   
    return (
      <div>
        {this.props.render(this.state.count,this.increment)}
      </div>
    )
  }
}

export default Counter2
