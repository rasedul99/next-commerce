import React from "react";

const Categorie = ({ data }) => {
  return (
    <div className="md:mt-16">
      <div className="uppercase font-bold text-[#103755] py-4 text-2xl">
        Category
      </div>
      <div className="grid gap-y-5 lg:grid-cols-5 md:grid-cols-4 gap-6 ">
        {data?.map((category) => {
          return (
            <div className="">
              <div className="">
                <img
                  className="rounded-lg overflow-hidden"
                  src={category.image}
                  alt=""
                />
              </div>
              <div className="text-center py-3">
                <h6 className="text-xl font-bold">{category.name} </h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categorie;
