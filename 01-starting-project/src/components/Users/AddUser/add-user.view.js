import { useRef, useState } from "react";
import Wrapper from "../../Helpers/Wraper";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import ErrorModal from "../../UI/ErrorModal";
import styles from "./add-user.styles.module.css";
export const AddUser = (props) => {
  const nameInput = useRef();
  const ageInput = useRef();

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = nameInput.current.value;
    const userAge = ageInput.current.value;

    (username.trim().length === 0 || userAge.length === 0) &&
      setError({ title: "field empty", message: "This field can be empty" });

    props.onFetchUser({
      name: username,
      age: userAge,
      id: Math.random.toString(),
    });

    nameInput.current.value = "";
    ageInput.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
          <input id="username" type="text" ref={nameInput} />
          <label htmlFor="age">Age:</label>
          <input id="age" type="number" ref={ageInput} />
          <Button type="submit">Add Users</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
