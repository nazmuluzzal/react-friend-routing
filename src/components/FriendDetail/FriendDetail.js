import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const FriendDetail = () => {
  let { friendId } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  });

  return (
    <div className="friend-container">
      <div className="friend-details">
        <p>FriendDetail: {friendId}</p>
        <h3>{friend.name}</h3>
        <p>Email: {friend.email}</p>
        <p>Phone: {friend.phone}</p>
        <p>Website: {friend.website}</p>
      </div>
    </div>
  );
};

export default FriendDetail;
