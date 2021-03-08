import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Friend.css";

const Friend = (props) => {
  const { name, email, id } = props.friend;
  const history = useHistory();
  const handleOnClick = (friendId) => {
    const url = `/friend/${friendId}`;
    history.push(url);
  };
  return (
    <div className="friend-details">
      <h1>Friend</h1>
      <h3>{name}</h3>
      <h4>Email: {email}</h4>
      <Link to={`/friend/${id}`}>
        <h4>Show Detail of {id}</h4>{" "}
      </Link>
      <button onClick={() => handleOnClick(id)} className="details-btn">
        Click
      </button>
    </div>
  );
};

export default Friend;
