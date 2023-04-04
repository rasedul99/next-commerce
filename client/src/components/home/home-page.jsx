import Link from "next/link";
import React from "react";
import Clothes from "./clothes/clothes";
import Electronics from "./electronics/electronics";

const HomePage = ({ data }) => {
  console.log(data);
  const clothes = data.filter((clothe) => clothe.category.name == "Clothes");
  const electronics = data.filter(
    (clothe) => clothe.category.name == "Electronics"
  );
  return (
    <div>
      <main>
        {/* {data?.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} passHref>
            <h2>{product.title}</h2>
            <h2>{product.desc}</h2>
          </Link>
        ))} */}
        <Electronics data={electronics} />
        <Clothes data={clothes} />
      </main>
    </div>
  );
};

export default HomePage;
