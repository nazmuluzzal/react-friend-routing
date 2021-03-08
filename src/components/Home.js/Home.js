import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Home = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div>
      <h1>Friends: {friends.length}</h1>
      <div className="friend-container">
        {friends.map((friend) => (
          <Friend friend={friend}></Friend>
        ))}
      </div>
    </div>
  );
};

export default Home;
