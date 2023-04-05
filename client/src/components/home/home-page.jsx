import Link from "next/link";
import React from "react";
import Clothes from "./clothes/clothes";
import Electronics from "./electronics/electronics";
import AllProducts from "./allProducts/allProducts";
import Categorie from "./categories/categories";
import hero from "../../images/hero.png";
import Image from "next/image";
import Navbar from "../navbar/navbar";
import Nav from "../navbar/Nav";
const HomePage = ({ data, categories }) => {
  const clothes = data.filter((cloth) => cloth.category.name == "Clothes");
  const electronics = data.filter(
    (cloth) => cloth.category.name == "Electronics"
  );
  return (
    <div>
      <main>
        {/* {data?.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} passHref>
            
          </Link>
        ))} */}
        <Navbar data={categories} />
        <Image priority src={hero} alt="hero image example" />
        <div className="max-w-7xl mx-auto">
          <Categorie data={categories} />
          <AllProducts data={data} />
          <Electronics data={electronics} />
          <Clothes data={clothes} />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
