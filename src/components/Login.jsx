import React from "react";

const Login = () => {
  return (
    <div className="h-dvh w-full flex justify-center items-center">
      <form className="flex flex-col border w-100 m-4 h-fit gap-4 p-4">
        <h2 className="text-xl">Admin Login</h2>
        <input
          type="text"
          placeholder="Enter Email"
          className="border p-2 rounded-md"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="border p-2 rounded-md"
        />
        <input type="submit" className="border p-2 rounded-md" />
      </form>
    </div>
  );
};

export default Login;
