import React, { useEffect } from "react";
import videoFlixLogo from "../assets/video_flix_logo_1.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { addUser, removeUser, } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully.");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email,displayName,photoURL } = user;
        dispatch(
          addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unsubscribe when Component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 z-10 flex justify-between">
      <img
        className="w-40 h-25 top-0  rounded-3xl bg-white bg-opacity-80 p-1 shadow-md"
        src={videoFlixLogo}
        alt="logo"
      ></img>
      {user && <div className="flex flex-row items-top p-2">
        <img className="w-10 h-10" alt="signs" src={user?.photoURL}></img>
        <button
          onClick={handleSignOut}
          className="bg-red-300 h-8 w-20 rounded-xl hover:bg-red-400 text-black mt-1 hover:scale-105 hover:shadow-lg transition duration-200"
        >
          Sign out
        </button>
      </div>}
      
    </div>
  );
};

export default Header;
