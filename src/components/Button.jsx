import React from "react";

function Button({ name, clickFunction }) {
  return (
    <div>
      <div onClick={clickFunction} className="cursor-pointer">
        <p
          className="px-[24px] py-[8px] w-fit text-white rounded-[24px] font-semibold border border-[#f37f34]"
          style={{
            background:
              "linear-gradient(290deg, rgba(243,127,52,1) 0%, rgba(223,61,68,1) 60%)",
          }}
        >
          {name}
        </p>
      </div>
    </div>
  );
}

export default Button;
