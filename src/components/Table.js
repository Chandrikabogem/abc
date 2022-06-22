import React from 'react'
import './Style.css'


const obj=[{
name:"chandu",
age:22,
gender:"female",
skill:"js"
},{
name:"sahithi",
age:5,
gender:"female",
skill:"js"
},
{
    name:"sahi",
    age:5,
    gender:"female",
    skill:"js"
    }
]

function Table() {
    var res=obj.map(details=>details.name)
   
        
       
  return (
    <div className='App'>
      <table>
          <tbody>
              <tr>
                  <th>
                      name
                  </th>
                  <th>
                      age
                  </th>
                  <th>
                      gender
                  </th>
                  <th>
                      Skill
                  </th>
              </tr>
          {/*  {obj.map((val)=>val.name)} */}
          {obj.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
              <td>{val.skill}</td>
            </tr>
          )
        })}

          </tbody>
      </table>
    </div>
  )
}

export default Table
