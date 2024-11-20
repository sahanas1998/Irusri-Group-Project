import React from "react";

function ItemCard({name , number, icon , item }) {
  return (
    <>
      <div className="py-[8px] px-[12px] border-t-2 border-b-2 border-[#7a7a7a] cursor-pointer" onClick={item}>
        <div className="flex justify-between items-center text-[#f26238]">
          <div className="text-[60px]">{icon}</div>
          <div className="flex flex-col gap-[12px]">
            <p className="text-[24px] font-medium ">{name}</p>
            <p className="text-[18px] text-end">{number} Items</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
