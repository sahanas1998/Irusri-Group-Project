import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";
import { IoIosCloseCircle } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "swiper/css";
import "swiper/css/navigation";

function ViewCard({ products, closedProduct }) {
  const [quantities, setQuantities] = useState(products.map(() => 1));

  const handleIncrease = (index) => {
    setQuantities((prev) => {
      const updated = [...prev];
      updated[index] += 1;
      return updated;
    });
  };

  const handleDecrease = (index) => {
    setQuantities((prev) => {
      const updated = [...prev];
      updated[index] = Math.max(1, updated[index] - 1);
      return updated;
    });
  };

  const totalAmount = products.reduce(
    (sum, product, index) => sum + product.price * quantities[index],
    0
  );

  return (
    <div className="md:py-[24px] py-[8px] md:px-[36px] px-[12px] bg-[#0b0706] flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col md:py-[40px] py-[8px] md:px-[24px] px-[12px] md:gap-[28px] gap-[12px] border-t-2 border-b-2 w-full border-[#7a7a7a]">
          <div className="font-bold font-Urbanist md:text-[40px] text-[18px] md:text-center text-start text-[#a72425] flex md:flex-row flex-col gap-[12px] justify-between">
            <p>Shopping Cart</p>
            <p>{products.length} Items</p>
          </div>
          <div className="flex flex-col gap-[18px] py-[8px] text-white border-t-2 border-b-2 border-[#7a7a7a]">
            {/* <thead>
                <tr className="flex justify-between items-start text-[20px] font-Urbanist">
                  <th></th>
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead> */}
            <div className="md:block hidden">
              <tbody className="flex flex-col gap-[24px]">
                {products.map((product, index) => (
                  <tr key={index} className="flex justify-between items-center">
                    <td className="flex gap-[8px]">
                      <div
                        onClick={() => closedProduct(product.name)}
                        className="cursor-pointer w-fit h-fit"
                      >
                        <IoIosCloseCircle className="text-[28px]" />
                      </div>
                      <img
                        src={product.img}
                        alt={product.name}
                        className="object-cover h-[80px] w-[80px] rounded-[12px]"
                      />
                    </td>
                    <td>
                      <p className="text-[24px] font-Raleway">{product.name}</p>
                    </td>
                    <td>
                      <div className="flex gap-[8px]">
                        {product.size.map((s, index) => (
                          <div
                            key={index}
                            className="border cursor-pointer hover:border-[#a72425] hover:text-[#a72425] text-white border-white py-[6px] px-[12px] w-[45px] flex items-center justify-center text-[20px]"
                          >
                            {s}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-[12px] items-center justify-center text-[20px]">
                        <button onClick={() => handleDecrease(index)}>
                          <LuMinus />
                        </button>
                        <div className="border border-white p-[8px] w-[45px] flex justify-center">
                          {quantities[index]}
                        </div>
                        <button onClick={() => handleIncrease(index)}>
                          <LuPlus />
                        </button>
                      </div>
                    </td>
                    <td>
                      <p className="text-[24px] font-Raleway">
                        ${product.price}
                      </p>
                    </td>
                    <td>
                      <p className="text-[24px] font-Raleway">
                        ${product.price * quantities[index]}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </div>
            <div className="md:hidden block">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
                }}
                className="relative"
              >
                {products.map((product, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col gap-[12px] items-center">
                      <div className="flex gap-[8px] justify-center">
                        <div
                          onClick={() => closedProduct(product.name)}
                          className="cursor-pointer w-fit h-fit"
                        >
                          <IoIosCloseCircle className="text-[16px]" />
                        </div>
                        <img
                          src={product.img}
                          alt={product.name}
                          className="object-cover h-[120px] w-[120px] rounded-[12px]"
                        />
                      </div>
                      <div className="flex justify-between gap-[12px] w-full">
                        <p className="text-[14px] font-Raleway">
                          {product.name}
                        </p>
                        <div className="flex gap-[8px]">
                          {product.size.map((s, sizeIndex) => (
                            <div
                              key={sizeIndex}
                              className="border cursor-pointer hover:border-[#a72425] hover:text-[#a72425] text-white border-white py-[2px] px-[6px] flex items-center justify-center text-[14px]"
                            >
                              {s}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between gap-[12px] w-full">
                        <div className="flex gap-[12px] items-center justify-center text-[14px]">
                          <button onClick={() => handleDecrease(index)}>
                            <LuMinus />
                          </button>
                          <div className="border border-white px-[8px] py-[4px] flex justify-center">
                            {quantities[index]}
                          </div>
                          <button onClick={() => handleIncrease(index)}>
                            <LuPlus />
                          </button>
                        </div>
                        <p className="text-[14px] font-Raleway">
                          ${product.price * quantities[index]}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="swiper-button-prev p-2 absolute left-0  top-[50%] transform -translate-y-[80%] z-10">
                  <GrFormPrevious />
                </div>
                <div className="swiper-button-next p-2 absolute right-0 top-[50%] transform -translate-y-[80%] z-10">
                  <GrFormNext />
                </div>
              </Swiper>
            </div>
          </div>
          <div className="flex justify-between md:text-[40px] text-[16px]">
            <p className="text-[#a72425]">Total Amount</p>
            <p className="text-[#a72425]">${totalAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCard;
