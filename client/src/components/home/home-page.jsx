import Link from "next/link";
import React from "react";
import Clothes from "./clothes/clothes";
import Electronics from "./electronics/electronics";
import AllProducts from "./allProducts/allProducts";
import Categories from "./categories/categories";
import Categorie from "./categories/categories";

const HomePage = ({ data, categories }) => {
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
            
          </Link>
        ))} */}

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
