import React from 'react'
function greet(props){
    const{name,lname}=props
    return <h1 className='class'>Hello {name} {lname}</h1>
}
const Greet=(props)=>{
    const{name,lname}=props
    return (
    <h1 className='class'>Hello {name} {lname}</h1>
)}
export default Greet 
