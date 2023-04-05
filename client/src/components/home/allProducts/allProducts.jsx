import React from "react";
import Card from "../card/card";

const AllProducts = ({ data }) => {
  return (
    <div className="md:mt-16">
      <div className="uppercase font-bold text-[#103755] py-4 text-2xl">
        Our Products
      </div>

      <div className="grid gap-y-5 lg:grid-cols-5 md:grid-cols-4 gap-6 ">
        {data?.slice(0, 20).map((product) => (
          <Card product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
