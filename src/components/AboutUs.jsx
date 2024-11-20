import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function AboutUs() {
  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="md:py-[60px] py-[40px] md:px-[24px] px-[16px] bg-[#0b0706]">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col gap-[24px] justify-between">
          <div className="flex flex-col gap-[18px]">
            <h3 className="text-[#a72425] uppercase font-bold text-[18px] tracking-[2px]">
              About Us
            </h3>
            <p className="text-[32px] font-bold text-white lg:w-[300px] w-full leading-[40px]">
              Elite Gear for Every Sports Enthusiast
            </p>
          </div>
          <div className="flex flex-col gap-[18px] lg:w-[800px] w-full">
            <p className="text-[#676672] text-[18px] leading-8">
              Welcome to the ultimate sports shop, where passion meets
              performance! Our store is dedicated to athletes and fitness
              enthusiasts of all levels, offering an extensive selection of
              high-quality sports gear, apparel, and accessories for a wide
              range of sports, including football, basketball, running, and
              more. We pride ourselves on providing the latest equipment and
              gear that blend style, comfort, and functionality, ensuring you’re
              always ready to perform at your best. Whether you’re a beginner or
              a seasoned pro, our knowledgeable staff is here to help you find
              exactly what you need to reach your goals and enjoy every moment
              on the field, court, or track. Gear up and get in the game with
              us!
            </p>
            <Link to="/blog">
              <Button name="See All Products" clickFunction={scrollToUp} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
