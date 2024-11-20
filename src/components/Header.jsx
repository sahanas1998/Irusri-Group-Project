import React, { useState } from "react";
import { Logo } from "../constants/Data";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import LogInCard from "./cards/LogInCard";
import LogOutCard from "./cards/LogOutCard";
import { IoClose } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import ViewCard from "../components/cards/ViewCard";
import { FaCartArrowDown } from "react-icons/fa";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [OpenCard, setOpenCard] = useState(false);
   const clickedProducts = useSelector((state) => state.clickedProducts);
   const dispatch = useDispatch();
  const [userName, setUserName] = useState("Log In");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalLogInOpen, setIsModalLogInOpen] = useState(false);
  const [isModalLogOutOpen, setIsModalLogOutOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(false);
  const handleScroll = (section) => {
    navigate(`/?scrollTo=${section}`);
  };

  const openViewCard = () => {
    setOpenCard(true);
  };

  const closeViewCard = () => {
    setOpenCard(false);
  };

  const closedProduct = (productName) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: productName });
  };
  

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? "#f26238" : "white";
  }


   const closeModal = () => setIsModalLogInOpen(false);

   const closeLogoutModel = () => setIsModalLogOutOpen(false);

   const openModal = () => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setLoggedInUser(true);
      console.log(storedUser);
      setIsModalLogOutOpen(true);
      setIsModalLogInOpen(false);
    }
    else {
       setIsModalLogInOpen(true);
       setIsModalLogOutOpen(false);
     }
   };


  return (
    <>
      <div className="pt-[12px] pb-[40px] md:px-[24px] px-[16px] bg-[#0b0706]">
        <div className="container mx-auto">
          <div className="flex flex-col gap-[30px]">
            <div className="flex justify-between items-center">
              <Link to="/">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-full h-[120px] object-cover lg:block hidden"
                />
              </Link>
              <div className="lg:flex hidden items-center lg:gap-[64px] gap-[12px] text-[18px]">
                <Link to="/" style={{ color: isActive("/") }}>
                  Home
                </Link>
                <Link
                  style={{ color: isActive("/aboutus") }}
                  onClick={() => handleScroll("about")}
                >
                  About us
                </Link>
                <Link to="/blog" style={{ color: isActive("/blog") }}>
                  Blog
                </Link>
                <Link
                  style={{ color: isActive("/contactus") }}
                  onClick={() => handleScroll("contact")}
                >
                  Contact us
                </Link>
                <div
                  className="relative border border-[#a72425] p-[12px] rounded-full text-[#a72425] font-bold text-[24px]"
                  onClick={openViewCard}
                >
                  <span className="absolute -top-2  -right-2 bg-[#a72425] text-white text-[16px] font-bold rounded-full h-[22px] w-[22px] flex items-center justify-center">
                    {clickedProducts.length}
                  </span>
                  <FaCartArrowDown />
                </div>
                <Button name={userName} clickFunction={openModal} />
              </div>
            </div>
            {isModalLogInOpen && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <button onClick={closeModal} className="close-button">
                    <IoClose />
                  </button>
                  <LogInCard
                    modelClose={closeModal}
                    setUserName={setUserName}
                  />
                </div>
              </div>
            )}

            {isModalLogOutOpen && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <button onClick={closeLogoutModel} className="close-button">
                    <IoClose />
                  </button>
                  <LogOutCard
                    closeLogoutModel={closeLogoutModel}
                    setUserNameEnd={setUserName}
                    setLoggedInUser={setLoggedInUser}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="lg:hidden flex justify-between items-center">
            <Link to="/">
              <img
                className="w-[100px] h-[60px] md:object-cover"
                src={Logo}
                alt="Logo"
              />
            </Link>
            <div className="flex gap-[18px] items-center">
              <div
                className="relative border border-[#a72425] p-[8px] rounded-full text-[#a72425] font-bold text-[24px]"
                onClick={openViewCard}
              >
                <span className="absolute -top-2  -right-2 bg-[#a72425] text-white text-[12px] font-bold rounded-full h-[18px] w-[18px] flex items-center justify-center">
                  {clickedProducts.length}
                </span>
                <FaCartArrowDown />
              </div>
              <div className="mobilebutton h-full w-fit cursor-pointer">
                <p
                  className="text-[36px] text-white mobile-menu-button"
                  onClick={toggleMobileMenu}
                >
                  <IoIosMenu />
                </p>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          <div
            className={` lg:hidden block fixed top-0 right-0 h-screen bg-white z-50 transition-transform duration-700 ${
              isMobileMenuOpen
                ? "translate-x-0 w-full"
                : "translate-x-full w-full"
            }`}
          >
            {/* Close Button */}
            <p
              className="absolute top-7 right-4 text-[36px] text-white z-50 cursor-pointer"
              onClick={closeMobileMenu}
            >
              <IoCloseOutline />
            </p>

            <MobileMenu
              closeMobileMenu={closeMobileMenu}
              openModal={openModal}
              userName={userName}
            />
          </div>
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 opacity-50 z-40"
              onClick={closeMobileMenu}
            ></div>
          )}
          {OpenCard && (
            <div className="modal-overlay">
              <div className="modal-content2 ">
                <button onClick={closeViewCard} className="close-button">
                  <IoClose />
                </button>
                <ViewCard
                  products={clickedProducts}
                  closedProduct={closedProduct}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
