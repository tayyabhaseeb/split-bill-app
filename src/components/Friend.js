import React from "react";
import Button from "./Button";

export default function Friend({
  obj,
  setCurOpenFriend,
  curOpenFriend,
  Flip,
  spitBill,
}) {
  const isOpen = obj.id === curOpenFriend;

  function toggleSplit(id) {
    setCurOpenFriend(id);
    Flip(id);
  }

  return (
    <li>
      <img src={obj.image} alt={obj.name} />
      <h3>{obj.name}</h3>
      {obj.balance < 0 ? (
        <p className="red">
          You owe {obj.name} ${Math.abs(obj.balance)}
        </p>
      ) : obj.balance > 0 ? (
        <p className="green">
          {obj.name} owes you ${obj.balance}
        </p>
      ) : (
        <p>You and {obj.name} are even</p>
      )}
      <Button onClick={() => toggleSplit(obj.id)}>
        {isOpen && spitBill ? "Close" : "Select"}
      </Button>
    </li>
  );
}
