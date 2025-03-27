import React from "react";

function EmpHeader({ changeUser, data }) {
  const logoutuser = () => {
    localStorage.setItem("loggedinuser", "");
    // window.location.reload();
    changeUser("");
  };
  return (
    <div className="w-full flex items-end justify-between">
      <h1 className="text-2xl font-semibold">
        Hello,
        <br />{" "}
        <span className="text-4xl font-bold">
          {data ? data.firstName : "Ansh"}!👋
        </span>
      </h1>
      <button
        onClick={logoutuser}
        className="bg-red-600 p-3 rounded-sm text-lg font-semibold text-white border-none"
      >
        Logout
      </button>
    </div>
  );
}

export default EmpHeader;
