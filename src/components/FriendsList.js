import React from "react";
import Friend from "./Friend";

export default function FriendsList({
  friendsListArr,
  setCurOpenFriend,
  curOpenFriend,
  Flip,
  spitBill,
}) {
  const friends = friendsListArr;

  const friendsList = friends.map((obj) => (
    <Friend
      obj={obj}
      key={obj.id}
      setCurOpenFriend={setCurOpenFriend}
      curOpenFriend={curOpenFriend}
      Flip={Flip}
      spitBill={spitBill}
    />
  ));
  return <ul>{friendsList}</ul>;
}
