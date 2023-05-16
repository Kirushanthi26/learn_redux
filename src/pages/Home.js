import React, { useState } from "react";

const Home = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevItems) => {
      return {
        ...prevItems,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);

    setUser({
      id: "",
      name: "",
      password: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
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
