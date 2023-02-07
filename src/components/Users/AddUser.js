import React from "react";

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
