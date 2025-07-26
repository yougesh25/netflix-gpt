import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);

  const toggleSignUpForm = () => {
    setSignInForm(!signInForm);
  };
  return (
    <div className="w-12/12">
      <Header />
      <div className="absolute">
        <img
          className="w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ad4b96d8-547c-4811-a738-9fd4d93731c5/web/IN-en-20250721-TRIFECTA-perspective_f34fb505-ef25-45d9-9aab-03cb2474de75_large.jpg"
          alt="logo"
        ></img>
      </div>
      <form className="w-3/12 absolute my-36 p-10   mx-auto right-0 left-0 text-white rounded-lg bg-black/75">
        <div className="mx-2">
          <h1 className="font-bold text-3xl py-4">
            {signInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!signInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 mx-auto mb-7  bg-gray-200 text-black w-full rounded-md"
            ></input>
          )}
          <input
            type="text"
            placeholder="Email or mobile number"
            className="p-3 mx-auto  bg-gray-200 text-black w-full rounded-md"
          ></input>

          <input
            type="password"
            placeholder="Password"
            className="p-3 mx-auto my-8 mb-0  bg-gray-200  text-black w-full rounded-md"
          ></input>
          <button className="bg-red-600 py-3 mx-auto mt-10 w-full rounded-md">
            {signInForm ? "Sign In" : "Sign Up"}
          </button>
          {signInForm ? (
            <p className="my-2 py-4">
              New to Netflix?{" "}
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
