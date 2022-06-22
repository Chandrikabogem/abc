import React, { Component } from 'react'
import RegCom from './RegCom'
import PureCom from './Purecom'

 class Parentcom extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          message:"hello"
       }
     }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                message:"hello"
            })
           // console.log("hii")
        },3000
      
         )}
     
  render() {
      console.log("parent component")
    return (
      <div>
          Parent Component
        <RegCom message={this.state.message}></RegCom>
        <PureCom message={this.state.message}></PureCom>
      </div>
    )
  }
}

export default Parentcom
