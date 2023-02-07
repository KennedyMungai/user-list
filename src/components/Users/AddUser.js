import React from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'

const AddUser = (props) =>
{
  const addUserHandler = (e) =>
  {
    e.preventDefault();
  }

  return (
    <Card>
      <form action="" onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" name="Username" id="username" />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" name="userage" id="age" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  )
};

export default AddUser;
