import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'

const AddUser = (props) =>
{
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAGe, setEnteredAGe] = useState(0)

  const addUserHandler = (e) =>
  {
    e.preventDefault();
  }

  const usernameChangeHandler = (e) => 
  {
    setEnteredUsername(e.target.value)
    console.log(enteredUsername)
  }

  return (
    <Card className={classes.input}>
      <form action="" onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" name="Username" id="username" onChange={usernameChangeHandler} value={enteredUsername} />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" name="userage" id="age" />
        <Button
          // className={ }
          type='submit'
          onClick={() => 
          {
            console.log("I've been pressed")
          }}
        >
          Add Button
        </Button>
      </form>
    </Card>
  )
};

export default AddUser;
