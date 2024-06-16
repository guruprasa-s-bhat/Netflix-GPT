import React from "react";
import logo from "./Assets/logo.png";
import user_icon from "./Assets/user_icon.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={logo} alt="logo" />
      {user && (
        <div className="flex gap-2 items-center">
          <img className="w-12 h-12" src={user_icon} alt="usericon" />

          <button onClick={handleSignOut} className="text-white font-bold">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
