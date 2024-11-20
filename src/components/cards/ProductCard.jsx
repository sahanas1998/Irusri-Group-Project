import React from "react";
import Button from "../Button";

function ProductCard({ name, price, img, body, size, clickCard }) {
  return (
    <div className="py-[12px] px-[18px] border-t-2 border-b-2 border-[#7a7a7a] w-full">
      <div className="flex flex-col gap-[18px]">
        <div className="flex items-center justify-center">
          <img
            src={img}
            alt="ProductImg"
            className="object-cover w-full h-[300px] rounded-[12px]"
          />
        </div>
        <div className="flex flex-col gap-[12px]">
          <div className="flex justify-between items-center">
            <h1 className="text-[28px] font-bold font-Urbanist text-[#A72425]">
              {name}
            </h1>
            <div className="flex gap-[4px]">
              <p className="text-[24px] font-Urbanist text-[#A72425]">
                ${price}
              </p>
            </div>
          </div>
          <p className="text-[16px] font-Raleway text-white">{body}</p>
        </div>
        <div className="flex justify-between items-center text-white">
          <div className="flex gap-[8px]">
            {size.map((s, index) => (
              <div
                key={index}
                className="border border-white py-[6px] px-[12px] w-[45px] flex items-center justify-center text-[20px]"
              >
                {s}
              </div>
            ))}
          </div>
          <Button name="Add to Cart" clickFunction={clickCard} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
