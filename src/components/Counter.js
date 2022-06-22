import React,{Component} from "react";
class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:1
        }
    }
increment(){
    /* this.setState({
        count:this.state.count + 2
        
    },()=>{console.log(this.state.count)}) */
   // console.log(this.state.count)

   this.setState(previous=>({
count:previous.count + 2
   
}))
//console.log(this.state.count)
}

incrementFive(){
    this.increment()
    this.increment()
}

    render(){
        return(
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
        )
    }
}
export default Counter