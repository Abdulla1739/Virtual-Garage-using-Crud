import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const handleLogout = async () => {
    await new Promise((resolve) => {
      window.localStorage.removeItem("isLogin");
      window.localStorage.removeItem("currentUserid");
      resolve();
    });
    window.location.href = "/";
  };
  return (
    <>
      <div onClick={() => handleLogout()}>Logout</div>
    </>
  );
};

export default Logout;
