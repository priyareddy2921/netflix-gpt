/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import Header from "./Header";
import Validate from "../utils/Validate";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { PHOTO_URL } from "../utils/constants";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const ValidateData = () => {
    // console.log(email);
    // console.log(password);
    // console.log(email.current.value, password.current.value);
    const message = Validate(
      email.current.value,
      password.current.value
      // name.current.value
    );
    // console.log(message);
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: { PHOTO_URL },
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              // navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen bg-image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/242447b0-bdfd-4235-8288-58d84366f0dc/US-en-20240827-TRIFECTA-perspective_WEB_d7dc1add-9eaf-4d94-88f4-2e2cf381a362_small.jpg"
          alt="bg_image"
        ></img>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="rounded-lg flex flex-col align-middle w-3/12 absolute p-10 bg-black m-36 mx-auto left-0 right-0 bg-opacity-80"
      >
        <h1 className="text-white text-xl font-bold py-4">
          {isSignIn ? "SignIn" : "SignUp"}
        </h1>

        <input
          ref={email}
          className="my-4 p-2 w-full align-middle bg-gray-800 text-white"
          type="text"
          placeholder="email address"
        ></input>
        {!isSignIn && (
          <input
            ref={name}
            className="my-4 p-2 w-full align-middle bg-gray-800 text-white"
            type="text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          ref={password}
          className="my-4 p-2 w-full align-middle bg-gray-800 text-white"
          type="password"
          placeholder="password"
        ></input>
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button
          onClick={ValidateData}
          className="py-2 my-6  h-10 w-full rounded-lg bg-red-700 text-white"
        >
          {isSignIn ? "SignIn" : "SignUp"}
        </button>
        <p className="text-white cursor-pointer" onClick={toggleSignIn}>
          {isSignIn ? "New to Netflix? SignUp now" : "Already a Member? SignIn"}
        </p>
      </form>
    </div>
  );
};

export default Login;
