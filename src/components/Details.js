import React, {Component} from "react";
class Details extends Component{
     constructor(){
        super()
        this.state={
            names1:"",
            role1:"",
            country1:""
        }

    }
 changeMessage(){
    this.setState({
        names1:"sahithi",
            role1:"software",
            country1:"america"
    })
}
 

render(){
    /* const {names,role,country}=this.props  */
    const {names1,role1,country1}=this.state 
    return(
        <div>
{/* <h1>{names}</h1>
<h1>{role}</h1>
<h1>{country}</h1> */}
<h1>{names1}</h1>
<h1>{role1}</h1>
<h1>{country1}</h1>

{/* <h1>{this.state.names}</h1> */}
<button onClick={()=>this.changeMessage()}>Submit</button>

        </div>


    )

    }   
}

export default Details