import Link from "next/link";
import React from "react";
import Clothes from "./clothes/clothes";

const HomePage = ({ data }) => {
  const clothes = data.filter((clothe) => clothe.category.name == "Clothes");
  return (
    <div>
      <main>
        {/* {data?.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} passHref>
            <h2>{product.title}</h2>
            <h2>{product.desc}</h2>
          </Link>
        ))} */}
        <Clothes data={clothes} />
      </main>
    </div>
  );
};

export default HomePage;
