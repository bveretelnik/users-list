import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  phone: "",
  date: "",
};

function AddUser({ addUserHandler }) {
  let history = useHistory();
  const [state, setState] = useState(initialState);

  const addUser = (e) => {
    e.preventDefault();
    if (
      state.name === "" ||
      state.email === "" ||
      state.phone === "" ||
      state.date === ""
    ) {
      alert("All the fields are mandatory!");
      return;
    }

    addUserHandler(state);
    setState({ initialState });
    history.push("/");
  };

  const { name, email, phone, date } = state;
  return (
    <div className="ui main">
      <h2>Add User</h2>
      <form className="ui form" onSubmit={addUser}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setState({ ...state, phone: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Date</label>
          <input
            type="text"
            name="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setState({ ...state, date: e.target.value })}
          />
        </div>
        <button className="ui button blue">Add</button>
        <Link to="/">
          <button className="ui button red">Close</button>
        </Link>
      </form>
    </div>
  );
}

export default AddUser;
