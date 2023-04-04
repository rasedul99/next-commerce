import React from "react";
import Card from "../card/card";

const Electronics = ({ data }) => {
  return (
    <div className="">
      <div className="uppercase font-bold text-[#103755] py-4 text-2xl">
        Electronics
      </div>

      <div className="grid gap-y-5 lg:grid-cols-5 md:grid-cols-4 gap-6 ">
        {data?.slice(0, 20).map((product) => (
          <Card product={product} />
        ))}
      </div>
    </div>
  );
};

export default Electronics;
