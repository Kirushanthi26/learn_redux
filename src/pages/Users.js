import React from 'react'
import { useSelector } from 'react-redux'

const Users = () => {

    const users = useSelector ((state) => {
        return state.users
    })

    

  return (
    <div>
      <h1>Users</h1>
      <ul>
      {users.map((user, index)=>
        <li key={index}>{user.id} || {user.name} || {user.password}</li>
      )}
      </ul>

      
    </div>
  )
}

export default Users
