import React from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";

// const users = [
//   {
//     id: 1,
//     name: "Bogdan Veretelnik",
//     phone: "0931202410",
//     email: "bv@gmail.com",
//   },
//   {
//     id: 2,
//     name: "Iryna Hranetska",
//     phone: "0932621341",
//     email: "ih@gmail.com",
//   },
// ];

function UserList({ users }) {
  return (
    <div className="main">
      <h2>
        Users
        <Link to="/add">
          <button className="ui button blue right">Add User</button>
        </Link>
      </h2>

      <div className="ui search">
        <div className="ui icon input">
          <input type="text" placeholder="Search Users" className="prompt" />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {users && users.map((user, id) => <UserCard key={id} user={user} />)}
      </div>
    </div>
  );
}

export default UserList;
