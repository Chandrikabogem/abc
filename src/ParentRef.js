import React, { Component } from 'react'
import ChildRef from './ChildRef'
//import ChildRef from './components/Child'

 class ParentRef extends Component {
     constructor(props) {
       super(props)
     
       this.ComRef = React.createRef()
          
       
     }

     clickHandler=()=>{
         this.ComRef.current.focusHandler()
     }
  render() {
    return (
      <div>
        <ChildRef ref={this.ComRef}/>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default ParentRef
