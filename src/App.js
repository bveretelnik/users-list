import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { fb } from "./firebase";
import Header from "./components/Header";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import { uuid } from "uuidv4";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    showAllUsers();
    //eslint-disable-next-line
  }, []);

  const showAllUsers = () => {
    fb.collection("users").onSnapshot((snap) => {
      setUsers(
        snap.docs.map((doc) => ({
          id: doc.id,
          user: doc.data(),
        }))
      );
    });
    console.log(users);
  };

  const addUserHandler = (user) => {
    console.log(user);
    fb.collection("users").add({
      id: uuid(),
      ...user,
    });
  };
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <UserList users={users.user} />
          </Route>
          <Route path="/add">
            <AddUser addUserHandler={addUserHandler} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
