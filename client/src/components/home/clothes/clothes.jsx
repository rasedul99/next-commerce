import React from "react";

const Clothes = ({ data }) => {
  console.log(data);
  return (
    <div className="">
      <div className="uppercase font-bold text-[#103755] py-4 text-2xl">
        Clothes
      </div>

      <div className="grid gap-y-5 lg:grid-cols-5 md:grid-cols-4 gap-6 ">
        {data?.slice(0, 20).map((product) => (
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
              <div className="text-[#103755] text-lg font-bold">
                {product.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clothes;
