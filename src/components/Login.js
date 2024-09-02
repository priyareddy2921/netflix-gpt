import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
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
      <form className="rounded-lg flex flex-col align-middle w-3/12 absolute p-10 bg-black m-36 mx-auto left-0 right-0 bg-opacity-80">
        <h1 className="text-white text-xl font-bold py-4">
          {isSignIn ? "SignIn" : "SignUp"}
        </h1>

        <input
          className="my-4 p-2 w-full align-middle bg-gray-800"
          type="text"
          placeholder="email address"
        ></input>
        {!isSignIn && (
          <input
            className="my-4 p-2 w-full align-middle bg-gray-800"
            type="text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          className="my-4 p-2 w-full align-middle bg-gray-800"
          type="password"
          placeholder="password"
        ></input>
        <button className="py-2 my-6  h-10 w-full rounded-lg bg-red-700 text-white">
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
