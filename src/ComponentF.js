import React, { Component } from 'react'
import {  UserName } from './UserContext'
export class ComponentF extends Component {
  render() {
    return (
      <UserName>
          {(userName)=>{
              return <div>Helloo {userName}</div>
          }}
      </UserName>
    )
  }
}

export default ComponentF
