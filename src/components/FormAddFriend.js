import React, { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ setFriendListArr, friendsListArr }) {
  const [friendName, setFriendName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");

  function addFriendToList() {
    const newFriend = {
      id: 1122333,
      name: friendName,
      image: imageUrl,
      balance: 0,
    };

    setFriendListArr([...friendsListArr, newFriend]);
    setFriendName("");
  }

  function handleSubmit(e) {
    return e.preventDefault();
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label> 👨🏾‍🤝‍👨🏽Friend</label>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />

      <label>🖼 Image URL</label>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <Button onClick={addFriendToList}>Add</Button>
    </form>
  );
}
