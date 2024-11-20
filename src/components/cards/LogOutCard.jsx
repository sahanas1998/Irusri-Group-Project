import React, { useState, useEffect } from "react";
import Button from "../Button";

function LogOutCard({ closeLogoutModel, setLoggedInUser, setUserNameEnd }) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser && storedUser.fullname) {
      setUserName(storedUser.fullname);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUserNameEnd("Log In");
    setLoggedInUser(null);
    closeLogoutModel();
  };

  return (
    <div className="py-[24px] px-[36px] bg-[#0b0706] flex items-center justify-center">
      <div className="flex flex-col py-[40px] px-[24px] gap-[28px] border-t-2 border-b-2 w-[600px] border-[#7a7a7a]">
        <h1 className="font-bold font-Urbanist text-[40px] text-center text-[#a72425]">
          Log Out
        </h1>
        <div className="flex flex-col gap-[18px] text-white">
          <div className="flex flex-col gap-[12px]">
            <label className="text-[20px]">{`${userName} , You Want to Logout ?`}</label>
          </div>
          <div className="flex justify-end">
            <Button
              name="Log Out"
              clickFunction={() => {
                handleLogout();
                closeLogoutModel();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogOutCard;
