import React, {Component} from "react";
class State extends Component{
    constructor(){
        super()
        this.state={
            message:"Hello User"
        }

    }
 changeMessage(){
    this.setState({
        message:"thanks for subscribe"
    })
}
changeName(){
    this.setState({
        message:"Hello User"
    })
}

render(){
    return(
        <div>
<h1>{this.state.message}</h1>
<button onClick={()=>this.changeMessage()}>Submit</button>
<button onClick={()=>this.changeName()}>Back</button>
        </div>


    )

    }   
}

export default State