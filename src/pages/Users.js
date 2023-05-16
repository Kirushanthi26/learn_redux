import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import * as userActions from "../store/action/user"
import { Link } from 'react-router-dom'

const Users = () => {


    const dispatch = useDispatch()

    const users = useSelector ((state) => {
        return state.users
    })

    const clearUser =(e) => {
        e.preventDefault() 
        dispatch(userActions.removeUser())
    }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.length ===0 && <p>no user data...</p>}
      {users.length >0 && users.map((user, index)=>
        <li key={index}>{user.id} || {user.name} || {user.password}</li>
      )}
      </ul>

      <button onClick={clearUser}>clear the list</button>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Users
