import React, { Component } from 'react'
import './Style.css'
class Forms extends Component {
 constructor(props) {
  super(props) 

 this. state = {
     userName:"",
     topic:"",
     select:"React"


   }

 }  

handleName =event=>{
    this.setState({
        userName:event.target.value
    })
}
 handleTopic=event=>{
     this.setState({
        topic:event.target.value 
     })
 }
handleSelect=event=>{
    this.setState({
        select:event.target.value
    })
}
 handleForm=event=>{
/* console.log(this.state.userName);
console.log(this.state.topic)
console.log(this.state.select) */
var obj=[{
  userName1:this.state.userName,
userTopic1:this.state.topic,
userSelect1:this.state.select
}]
console.log(obj)
event.preventDefault()
 }
 
//console.log(obj)

  render() {
   /*  var obj=[{
      userName1:this.state.userName,
    userTopic1:this.state.topic,
    userSelect1:this.state.select
    }]
    console.log(obj) */

   /*  var {obj}=this.props
    console.log(obj) */
   /*  var obj={
      userName1:this.state.userName,
    userTopic1:this.state.topic,
    userSelect1:this.state.select
    }
    console.log(obj) */
    // {obj.map((val)=>{
     // console.log(val)
   // })} 
    /*  {obj.map((val, key) => {
      console.log(obj)
 return (
 <tr key={key}>
   <td>{val.userName1}</td>
   <td>{val.userTopic1}</td>
   <td>{val.userSelect1}</td>
  
 </tr>
)
})
}   */
   // console.log(obj) 
    return (
      // console.log()
      <div>
           <h1>Form Handling</h1>
          <form onSubmit={this.handleForm}>
        <div>
            <label>UserName</label>
            <input type="text" value={this.state.userName} onChange={this.handleName}></input>
        </div>
        <div>
            <label>Topic  </label>
            <input type="text" value={this.state.topic} onChange={this.handleTopic}></input>
        </div>
        <div>
            <label>Select  </label>
            <select value={this.state.select} onChange={this.handleSelect}>
                <option>React</option>
                <option>Js</option>
                <option>HTML</option>
            </select>
        </div>
        <button type="submit">Submit</button>
        
        </form>
        <table>
          <tbody>
              <tr>
                  <th>
                      name
                  </th>
                  <th>
                      Topic
                  </th>
                  <th>
                      select
                  </th>
                 
              </tr>
             {/* 
               {obj.map((val, key) => {
                 console.log
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
             
            </tr>
          )
        })
      }  */}
              </tbody>
              </table>
      </div>
     
    )
  }
}

export default Forms
