import React from "react";
import classes from "./User.module.scss";
const User = ({ user, fetchUserOne, userOne }) => {
  return (
    <div className={classes.user}>
      <div>user: {user.name}</div>
      <div>username: {user.username}</div>
      <button onClick={() => fetchUserOne("users", user.id)}>подробнее</button>
      ========================================================
      {userOne.id === user.id && (
        <>
          <div>company name: {userOne?.company?.name}</div>
          <div>company city: {userOne?.address?.city}</div>
        </>
      )}
    </div>
  );
};

export default User;
