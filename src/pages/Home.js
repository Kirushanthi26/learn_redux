import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import * as userActions from "../store/action/user"

const Home = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    password: "",
  });

  const dispatch = useDispatch()

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevItems) => {
      return {
        ...prevItems,
        [name]: value,
      };
    });
  };


  const addUser = (e) => {
    e.preventDefault() 
    dispatch(userActions.addUser(user))
    console.log(user)

    setUser({
        id: "",
        name: "",
        password: "",
      });
  }

  return (
    <form onSubmit={addUser}>
      <h1>Home</h1>
      <h3>Add User Form</h3>
      <input
        name="id"
        type="number"
        placeholder="Enter ID"
        onChange={inputHandler}
        value={user.id}
      />
      <input
        name="name"
        type="text"
        placeholder="Enter user name"
        onChange={inputHandler}
        value={user.name}
      />
      <input
        name="password"
        type="password"
        placeholder="Enter password"
        onChange={inputHandler}
        value={user.password}
      />
      <button type="submit">add user</button>
    </form>
  );
};

export default Home;
