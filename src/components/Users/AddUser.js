import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'

const AddUser = (props) =>
{
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState(0)

  const addUserHandler = (e) =>
  {
    e.preventDefault();
    console.log(enteredUsername + ' ' + enteredAge)
  }

  const usernameChangeHandler = (e) => 
  {
    setEnteredUsername(e.target.value)
  }

  const ageChangeHandler = (e) => 
  {
    setEnteredAge(e.target.value)
  }

  return (
    <Card className={classes.input}>
      <form action="" onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" name="Username" id="username" onChange={usernameChangeHandler} value={enteredUsername} />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" name="userage" id="age" onChange={ageChangeHandler} value={enteredAge} />
        <Button
          // className={ }
          type='submit'
        >
          Add Age
        </Button>
      </form>
    </Card>
  )
};

export default AddUser;
