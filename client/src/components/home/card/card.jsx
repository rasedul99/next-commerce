import React from "react";

const Card = ({ product }) => {
  return (
    <div
      className="bg-white shadow-md p-4 rounded translate-x-1"
      key={product.id}
    >
      <div className="relative">
        <img src={product.images[0]} alt="" />
        <div className="absolute top-2 right-2 text-xs font-semibold rounded-lg px-2 shadow-sm text-white  uppercase bg-orange-500 ">
          {product.category.name}
        </div>
      </div>
      <div className="py-3">
        <h6 className="py-2 opacity-80 text-[#63766b] block text-base font-normal">
          {product.title}
        </h6>
        <div className="text-[#103755] text-lg font-bold">{product.price}</div>
      </div>
    </div>
  );
};

export default Card;
