import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'

const AddUser = (props) =>
{
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState()

  let invalid = true

  const addUserHandler = (e) =>
  {
    e.preventDefault();
    console.log(enteredUsername + ' ' + enteredAge)
    setEnteredUsername('')
    setEnteredAge()
  }

  const usernameChangeHandler = (e) => 
  {
    if (e.target.value.trim().length === 0)
    {
      invalid = true
    }
    else
    {
      invalid = false
    }

    !invalid && setEnteredUsername(e.target.value)
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
          Add User
        </Button>
      </form>
    </Card>
  )
};

export default AddUser;
