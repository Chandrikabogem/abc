import React, { Component } from 'react'

 class Conditional extends Component {

constructor(props) {
  super(props)

  this.state = {
     a:10,
     b:20

  }
}


  render() {
      const {a,b}=this.state
      var sum=(a+b);
     

   /*  if(sum==30){
        return(
            <div>True</div>
        )
    }
    else{
        return(
            <div>False</div>
        )
    } */

   return (sum==30)? (
         <h1>True</h1> 
       // console.log()
    ):
    (<h1>False</h1>)
  }
}

export default Conditional
