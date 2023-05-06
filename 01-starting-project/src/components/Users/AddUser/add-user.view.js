import { useState } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import ErrorModal from "../../UI/ErrorModal";
import styles from "./add-user.styles.module.css";
export const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");

  const [enteredAge, setEnteredAge] = useState("");

  const [error, setError] = useState("");

  const changeUsernameHandler = (e) => {
    e.preventDefault();
    setEnteredUsername(e.target.value);
  };

  const changeAgeHandler = (e) => {
    e.preventDefault();
    setEnteredAge(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    (enteredUsername.trim().length === 0 || enteredAge.length === 0) &&
      setError({ title: "field empty", message: "This field can be empty" });
    props.onFetchUser({
      name: enteredUsername,
      age: enteredAge,
      id: Math.random.toString(),
    });
    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorHandler={errorHandler}
        />
      )}
      <Card>
        <form className={styles.input} onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            value={enteredUsername}
            onChange={changeUsernameHandler}
            id="username"
            type="text"
          />
          <label htmlFor="age">Age:</label>
          <input
            value={enteredAge}
            onChange={changeAgeHandler}
            id="age"
            type="number"
          />
          <Button type="submit">Add Users</Button>
        </form>
      </Card>
    </>
  );
};
