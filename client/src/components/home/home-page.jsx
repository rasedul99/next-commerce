import Link from "next/link";
import React from "react";

const HomePage = () => {
  const products = [
    {
      id: 1,
      title: "demo",
      desc: "demotitle",
    },
    {
      id: 2,
      title: "demo",
      desc: "demotitle",
    },
  ];
  return (
    <div>
      <main>
        {products?.map((product) => (
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
