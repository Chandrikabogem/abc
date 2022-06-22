import React, {Component}  from "react";

class Welcome extends Component{
   /*  constructor(){
        super()
            this.state={
message:"heloo user"
            }
        
    } */
    render(){
        const {name,lname}=this.props
        return (
         
            <div>
<h1>Hello {name}{lname}</h1>
<p>Welcome to Class</p>
<button>Submit</button>

           
            <nav>
            <ul>
              <li><a href="#">HTML</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">SASS</a></li>
            </ul>
          </nav>
          </div>
        )
    }
}
export default Welcome