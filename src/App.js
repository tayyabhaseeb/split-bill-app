import React, { useState } from "react";
import FriendsList from "./components/FriendsList";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";

import FormSplitBill from "./components/FormSplitBill";

// const initialFriends = [
//   {
//     id: 118836,
//     name: "Clark",
//     image: "https://i.pravatar.cc/48?u=118836",
//     balance: -7,
//   },
//   {
//     id: 933372,
//     name: "Sarah",
//     image: "https://i.pravatar.cc/48?u=933372",
//     balance: 20,
//   },
//   {
//     id: 499476,
//     name: "Anthony",
//     image: "https://i.pravatar.cc/48?u=499476",
//     balance: 0,
//   },
// ];

export default function App() {
  const [addFriendFlip, setAddFriendFlip] = useState(false);
  const [curOpenFriend, setCurOpenFriend] = useState(null);
  const [spitBill, setSpitBill] = useState(false);
  const [filterObjName, setFilterObjectName] = useState({});

  const [friendsListArr, setFriendListArr] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ]);

  let filterObj;
  function toggleFlip() {
    setAddFriendFlip((prev) => !prev);
  }

  function Flip(id) {
    setSpitBill((prev) => !prev);
    console.log(id);

    [filterObj] = friendsListArr.filter((obj) => obj.id === id);

    setFilterObjectName({ ...filterObj });
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friendsListArr={friendsListArr}
          setCurOpenFriend={setCurOpenFriend}
          curOpenFriend={curOpenFriend}
          Flip={Flip}
          spitBill={spitBill}
        />

        {addFriendFlip && (
          <FormAddFriend
            friendsListArr={friendsListArr}
            setFriendListArr={setFriendListArr}
          />
        )}
        <Button onClick={toggleFlip}>
          {addFriendFlip ? "Close" : "Add Friend"}
        </Button>
      </div>
      {spitBill && (
        <FormSplitBill
          filterObjName={filterObjName}
          setFriendListArr={setFriendListArr}
        />
      )}
    </div>
  );
}
