import React from "react";
import userAvatar from "../img/user.png";

function UserCard({ user }) {
  return (
    <div className="item">
      <img className="ui avatar image" src={userAvatar} alt="user" />
      <div className="content">
        <div className="header">{user.name}</div>
        <p style={{ color: "blue" }}>{user.email}</p>
        <p style={{ color: "green" }}>{user.phone}</p>
        <p>date</p>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
      ></i>
      <i
        className="edit alternate outline icon"
        style={{ color: "blue", marginTop: "7px" }}
      ></i>
    </div>
  );
}

export default UserCard;
