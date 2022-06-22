import React, { Component } from 'react'
import Child from './Child'

 class Parent extends Component {
     constructor(props) {
       super()
     
       this.state = {
          message:"Chandrika"
       }
       this.changeState=this.changeState.bind(this)
     }
     
changeState(child){
   
        alert(`Hello ${this.state.message} from ${child}`)
    
}

  render() {
    return (
      <div>
       <Child greetHandler={this.changeState}/>
      </div>
    )
  }
}

export default Parent
