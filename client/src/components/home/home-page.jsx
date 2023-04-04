import Link from "next/link";
import React from "react";

const HomePage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <main>
        {data?.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} passHref>
            <h2>{product.title}</h2>
            <h2>{product.desc}</h2>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default HomePage;
