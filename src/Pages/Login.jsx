import React from "react";
import Header from "../Components/Header";

function Login() {
  return (
    <div className="flex">
      <Header />
      <div className="w-2/4 h-screen flex justify-center items-center">
        <div>
          <h1 className="text-[20px] font-bold mb-1">
            Sign In To Your Account
          </h1>
          <p className="text-[#6b7181]">
            Let's sign in to your account and get started.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
