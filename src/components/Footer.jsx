import React from "react";
import { Logo } from "../constants/Data";
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { LuLinkedin } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { TbBrandYoutube } from "react-icons/tb";
import { Link , useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (section) => {
    navigate(`/?scrollTo=${section}`);
  };

  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const isActive = (path) => {
    return location.pathname === path ? "#f26238" : "white";
  };
  return (
    <>
      <div className="py-[60px] md:px-[24px] px-[16px] bg-[#010101] border-t border-[#ffffff67]">
        <div className="container mx-auto">
          <div className="flex flex-col gap-[60px]">
            <div className="flex lg:flex-row flex-col gap-[40px] justify-between lg:items-start md:items-center items-start">
              <div className="flex flex-col gap-[24px] lg:items-start items-center">
                <Link to="/">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="h-[100px] w-[200px] object-cover"
                  />
                </Link>
                <p className="text-white text-[18px] xl:w-[600px] w-full">
                  Discover expert insights and stay updated on the latest
                  digital trends. Our professionals provide actionable knowledge
                  to help you navigate industry changes and achieve success in a
                  rapidly evolving market
                </p>
                <div className="flex gap-[36px]">
                  <Link>
                    <FiFacebook className="text-white text-[20px]" />
                  </Link>
                  <Link>
                    <IoLogoInstagram className="text-white text-[20px]" />
                  </Link>
                  <Link>
                    <LuLinkedin className="text-white text-[20px]" />
                  </Link>
                  <Link>
                    <CiTwitter className="text-white text-[20px]" />
                  </Link>
                  <Link>
                    <TbBrandYoutube className="text-white text-[20px]" />
                  </Link>
                </div>
              </div>
              <div className="flex md:flex-row flex-col md:gap-[64px] gap-[30px]">
                <div className="flex flex-col gap-[36px]">
                  <h3 className="text-[24px] text-white">Company</h3>
                  <div className="flex flex-col gap-[20px] text-[#ede4d7] text-[14px]">
                    <Link
                      to="/"
                      onClick={scrollToUp}
                      style={{ color: isActive("/") }}
                    >
                      Home
                    </Link>
                    <Link onClick={() => handleScroll("about")}>About Us</Link>
                    <Link
                      to="/blog"
                      onClick={scrollToUp}
                      style={{ color: isActive("/blog") }}
                    >
                      Blogs
                    </Link>
                    <Link onClick={() => handleScroll("contact")}>
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-[36px]">
                  <h3 className="text-[24px] text-white">Payment</h3>
                  <div className="flex flex-col gap-[20px] text-[#ede4d7] text-[14px]">
                    <p>Online</p>
                    <p>Card</p>
                    <p>PayPal</p>
                    <p>Cash</p>
                  </div>
                </div>
                <div className="flex flex-col gap-[36px]">
                  <h3 className="text-[24px] text-white">Cantact</h3>
                  <div className="flex flex-col gap-[20px] text-[#ede4d7] text-[14px]">
                    <div className="flex flex-col gap-[4px]">
                      <p>Email Address</p>
                      <p>info@vavavasport.com</p>
                    </div>
                    <div className="flex flex-col gap-[4px]">
                      <p>Phone Number</p>
                      <p>+94 77 223 3444</p>
                    </div>
                    <div className="flex flex-col gap-[4px] w-[180px]">
                      <p>Address</p>
                      <p>Colombo , Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-[24px] justify-between items-center">
              <p className="text-[#ede4d7] md:text-[16px] text-[12px]">
                VAVAVA Sport @Copyrights All Rights Reserved - 2024
              </p>
              <div className="flex gap-[24px]">
                <p className="text-[#ede4d7] md:text-[16px] text-[12px]">
                  Term & Condition
                </p>
                <p className="text-[#ede4d7] md:text-[16px] text-[12px]">
                  Privacy & Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
