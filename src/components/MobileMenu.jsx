import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";

const MobileMenu = ({ closeMobileMenu, userName, openModal }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (section) => {
    navigate(`/?scrollTo=${section}`);
    closeMobileMenu();
    window.scrollTo(0, 0);
  };

  const isActive = (path) => {
    return location.pathname === path ? "#f26238" : "white";
  };

  return (
    <div className="w-full h-full flex flex-col items-center z-0 justify-center py-[12px] px-[16px] bg-[#0b0706]">
      <div className="flex flex-col gap-[10px] w-full font-medium text-[24px] text-[#001227] justify-center items-center h-[200px]">
        <div className="flex flex-col items-center gap-[24px] text-[18px]">
          <Link
            to="/"
            style={{ color: isActive("/") }}
            onClick={() => handleScroll("/")}
          >
            Home
          </Link>
          <Link
            style={{ color: isActive("/aboutus") }}
            onClick={() => handleScroll("about")}
          >
            About us
          </Link>
          <Link
            to="/blog"
            style={{ color: isActive("/blog") }}
            onClick={() => handleScroll("")}
          >
            Blog
          </Link>
          <Link
            style={{ color: isActive("/contactus") }}
            onClick={() => handleScroll("contact")}
          >
            Contact us
          </Link>
          <div onClick={() => handleScroll("")}>
            <Button name={userName} clickFunction={openModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
