import React, {useState , useEffect} from 'react'
import Button from "./Button";
import { Link } from "react-router-dom";
import ProductDetails from '../constants/ProductDetails';
import ProductCard from './cards/ProductCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel, Autoplay } from "swiper/modules";

function Product() {
    const scrollToUp = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;

        if (width >= 1280) {
          setSlidesPerView(3);
        } else if (width >= 800) {
          setSlidesPerView(2);
        } else {
          setSlidesPerView(1);
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <>
      <div className="md:py-[60px] py-[40px] md:px-[24px] px-[24px] bg-[#0b0706] ">
        <div className="container mx-auto ">
          <div className="flex flex-col gap-[24px] ">
            <div className="flex md:flex-row flex-col gap-[12px] justify-between items-end ">
              <div className="flex flex-col gap-[18px]">
                <h3 className="text-[#a72425] uppercase font-bold text-[18px] tracking-[2px]">
                  Our Products
                </h3>
                <p className="text-[24px] font-bold text-white lg:w-[600px] w-full leading-[40px]">
                  All products are good quality and reasonable price. you can
                  order anywhere.
                </p>
              </div>
                <Link to="/blog" className=''>
                  <Button name="See All Products" clickFunction={scrollToUp} />
                </Link>
            </div>
            <Swiper
              direction={"horizontal"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              mousewheel={true}
              slidesPerView={slidesPerView}
              modules={[Autoplay, Mousewheel]}
              className="mySwiper w-full h-full"
            >
              {ProductDetails.map((product, index) => (
                <SwiperSlide key={index}>
                  <ProductCard
                    key={index}
                    name={product.name}
                    img={product.img}
                    price={product.price}
                    body={product.body}
                    size={product.size}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product
