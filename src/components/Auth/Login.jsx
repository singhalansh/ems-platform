import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted:", { username, password }); // Debugging output
    handleLogin(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/2 h-1/2 shadow-[0px_0px_10px_rgba(255,255,255,0.2)] rounded-[20px] flex justify-center bg-zinc-900/30 items-center">
        <div className="w-1/2 h-1/2 flex flex-col items-center gap-5">
          <h1 className="text-2xl font-bold text-white mb-2">Login</h1>
          <form onSubmit={submitHandler} className="flex flex-col gap-2">
            <input
              required
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-4 outline-none placeholder:text-zinc-400 rounded-full border-gray-400 border text-white mb-2 bg-transparent"
            />
            <input
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-4 outline-none placeholder:text-zinc-400 rounded-full border-gray-400 border text-white mb-2 bg-transparent"
            />
            <button
              type="submit"
              className="px-5 py-2 rounded-full bg-green-600 text-white text-xl"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
