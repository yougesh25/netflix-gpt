import React, { useEffect } from "react";
import videoFlixLogo from "../assets/video_flix_logo_1.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import langConstants from "../utils/langConsts";
import { changelanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully.");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changelanguage(e.target.value));
  };

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
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
    <div className="absolute w-screen px-8 py-2 z-10 flex flex-col md:flex-row justify-between bg-black sm:bg-blue-600 md:bg-green-500">
      <img
        className="top-0 mx-auto md:mx-0 size-1/6  sm:size-1/6 md:size-1/12 rounded-3xl bg-white bg-opacity-80 p-1 shadow-md"
        src={videoFlixLogo}
        alt="logo"
      ></img>
      {user && (
        <div className="flex flex-row items-top p-2">
          {showGptSearch && (
            <select
              className="bg-amber-50 w-20 h-6 mt-1"
              onChange={handleLangChange}
            >
              {langConstants.languageOptions.map((lang) => (
                <option key={lang.key} value={lang.value}>
                  {lang.key}
                </option>
              ))}
            </select>
          )}

          <button
            className="px-4 mx-4  w-1/3  h-8 rounded-lg bg-purple-700 text-white"
            onClick={handleGptSearch}
          >
           {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img className="w-8 h-8 rounded-lg" alt="signs" src={user?.photoURL}></img>
          <button
            onClick={handleSignOut}
            className="bg-red-300 h-8 ml-4 w-20 rounded-xl hover:bg-red-400 text-black hover:scale-105 hover:shadow-lg transition duration-200"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
