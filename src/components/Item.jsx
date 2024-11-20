import React from 'react'
import ItemCard from "../components/cards/ItemCard";
import ItemDetails from "../constants/ItemDetails";

function Item() {
  return (
    <>
      <div className="md:py-[60px] py-[40px] md:px-[24px] px-[16px] bg-[#0b0706]">
        <div className="container mx-auto">
          <div className="flex flex-col gap-[32px]">
            <h3 className="text-[#fff] text-[36px] font-bold">All Items</h3>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[36px]">
              {ItemDetails.map((item, index) => (
                <ItemCard
                  key={index}
                  icon={item.icon}
                  name={item.name}
                  number={item.number}
                  item={item.item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item
