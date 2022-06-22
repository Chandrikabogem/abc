import React from 'react'
//import Person from './Person'

function List() {
const obj=[{
name:"chandu",
age:22,
role:"intern"
},{
name:"ram",
age:24,
role:"intern"
},
{
    name:"sai",
    age:47,
    role:"intern"
    },
    {
        name:"sri",
        age:32,
        role:"intern"
        }
]
var array=[2,4,5,6,7,8,9,10,23,45,35]
var arr=array.map((num,index)=><h1 key={index}>{index}{num}</h1>)
console.log(arr)
//var person=obj.map((person,index) =><Person key={index} person={person}></Person>)
//console.log(person)
/* var personList=array.filter(x=>x>20)
var personAge=obj.filter(x=>x.age>30)
var sums=array.reduce((x,y)=>(x+y))
 console.log(personList)
console.log(personAge)
console.log(sums) 
console.log(person)

var a=10;
var c=40;
var add=(a+c);
if(add==50){
    console.log("true")
}
else{
    console.log("false")
} */
    return (
    <div>
      {arr}
    </div>
  )  
}

export default List
