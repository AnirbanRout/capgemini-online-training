import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const ProfileCard = () => {
  const { isLoggedIn, name } = useContext(UserContext);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h3>User Profile</h3>
          <p>User Name: {name}</p>
          <p>Login Status: {isLoggedIn ? "Logged In" : "Logged Out"}</p>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default ProfileCard;
