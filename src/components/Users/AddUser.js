import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css'

const AddUser = (props) =>
{
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState()

  const addUserHandler = (e) =>
  {
    e.preventDefault();

    if (enteredUsername.trim().length === 0 || +enteredAge <= 0 || enteredAge.trim().length === 0)
    {
      setError(
        {
          title: 'Invalid Input',
          message: 'Please enter a valid name and age (non-empty values)'
        }
      )
      return;
    }

    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
  }

  const usernameChangeHandler = (e) => 
  {
    setEnteredUsername(e.target.value)
  }

  const ageChangeHandler = (e) => 
  {
    setEnteredAge(e.target.value)
  }

  const errorHandler = () => 
  {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} />}
      <Card className={classes.input}>
        <form action="" onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" name="Username" id="username" onChange={usernameChangeHandler} value={enteredUsername} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" name="userage" id="age" onChange={ageChangeHandler} value={enteredAge} />
          <Button
            type='submit'
          >
            Add User
          </Button>
        </form>
      </Card>
    </div>
  )
};

export default AddUser;
