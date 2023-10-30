import React, { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ filterObjName, setFriendListArr }) {
  const [expense, setExpense] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [billPaidBy, setBillPaidBy] = useState("user");

  function finalPaidClick() {
    setFriendListArr((prevArr) =>
      prevArr.map((obj) => {
        return obj.id === filterObjName.id
          ? {
              ...obj,
              balance:
                billPaidBy === "user" && obj.balance < 0
                  ? obj.balance + (expense - myExpense)
                  : billPaidBy === "user" && obj.balance > 0
                  ? obj.balance + (expense - myExpense)
                  : billPaidBy === "friend" && obj.balance < 0
                  ? obj.balance - (expense - myExpense)
                  : obj.balance - (expense - myExpense),
            }
          : obj;
      })
    );

    setExpense("");
    setMyExpense("");
    setBillPaidBy("user");
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {filterObjName.name}</h2>

      <label>💵 Bill Value</label>
      <input
        type="text"
        value={expense}
        onChange={(e) => setExpense(Number(e.target.value))}
      />

      <label>🤵 Your expense</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) => setMyExpense(Number(e.target.value))}
      />

      <label>👨🏾‍🤝‍👨🏽 {filterObjName.name} expense</label>
      <input type="text" disabled value={expense && expense - myExpense} />

      <label>🤑 Who is paying the bill</label>
      <select
        value={billPaidBy}
        onChange={(e) => setBillPaidBy(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{filterObjName.name}</option>
      </select>
      <Button onClick={finalPaidClick}>Split Bill</Button>
    </form>
  );
}
