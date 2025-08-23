import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validator";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import background from "../assets/background_2.jpeg";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const dispatch = useDispatch();
  const name = useRef();
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    console.log(message);

    if (!signInForm) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setSuccessMessage("✅ sign up successfull");
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAFGIz7pEYMHqzwt2kHGRn9wjPSq0gJPhb1w&s",
          })
            .then(() => {
              // Profile updated!
              console.log("Profile updated successfully");
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              console.log("Error updating profile :", error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setSuccessMessage("✅ sign in successfull");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/invalid-credential")
            setErrorMessage("User Not found ! Please re-check");
        });
    }
  };

  const toggleSignUpForm = () => {
    setSignInForm(!signInForm);
  };
  return (
    <div className="w-auto h-auto">
      <Header />
      <div className="absolute">
        <img
          className="w-screen h-screen bg-cover bg-center bg-no-repeat"
          src={background}
          alt="logo"
        ></img>
      </div>
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute my-36 p-10   mx-auto right-0 left-0 text-white rounded-lg bg-black/75"
      >
        <div className="mx-2">
          <h1 className="font-bold text-3xl py-4">
            {signInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!signInForm && (
            <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="p-3 mx-auto mb-7  bg-gray-200 text-black w-full rounded-md"
            ></input>
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email or mobile number"
            className="p-3 mx-auto  bg-gray-200 text-black w-full rounded-md"
          ></input>

          <input
            type="password"
            placeholder="Password"
            ref={password}
            className="p-3 mx-auto my-8 mb-0  bg-gray-200  text-black w-full rounded-md"
          ></input>
          <p className="text-red-500 text-lg font-bold mt-4 p-2">
            {errorMessage}
          </p>
          <p className="text-green-500 text-lg font-bold mt-4 p-2">
            {successMessage}
          </p>
          <button
            className="bg-red-600 py-3 mx-auto mt-10 w-full rounded-md"
            onClick={handleButtonClick}
          >
            {signInForm ? "Sign In" : "Sign Up"}
          </button>
          {signInForm ? (
            <p className="my-2 py-4">
              New to Videoflix?{" "}
              {
                <span
                  className="hover:underline cursor-pointer"
                  onClick={toggleSignUpForm}
                >
                  Sign up now.
                </span>
              }
            </p>
          ) : (
            <p className="my-2 py-4">
              Already an User?{" "}
              {
                <span
                  className="hover:underline cursor-pointer"
                  onClick={toggleSignUpForm}
                >
                  Sign In now.
                </span>
              }
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
