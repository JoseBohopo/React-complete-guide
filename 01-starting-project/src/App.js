import React, { useState } from "react";

import "./App.css";
import AddUser from "./components/Users/AddUser";
import ListUsers from "./components/Users/ListUsers";

const App = () => {
  const [user, setUser] = useState([]);
  const fetchUser = (userInput) => {
    setUser((prevState) => [...prevState, userInput]);
  };
  return (
    <>
      <AddUser onFetchUser={fetchUser} />
      <ListUsers list={user} />
    </>
  );
};

export default App;
