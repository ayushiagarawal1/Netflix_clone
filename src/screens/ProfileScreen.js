import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.uDtPlCTKLnrQW_ipwKsCJAHaHa&pid=Api&P=0&h=180"
            alt="avatar"
          />
        </div>
        <div className="profileScreen_details">
          <h2>{user.email}</h2>
          <div className="profileScreen_plans">
            <button
              className="profileScreen_signOut"
              onClick={() => auth.signOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
