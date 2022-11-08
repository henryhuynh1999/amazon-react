import React from "react";
import Product from "./Product";
import data from "../../data/product.json";
import Categories from "./Categories";
function Home() {
  return (
    <main className="relative flex justify-around">
      <div>
        <Categories />
      </div>
      <div className="flex justify-center space-x-6 ">
        {data.map((product) => (
          <Product
            title={product.name}
            subtitle={product.subtitle}
            image={product.image}
            price={product.price}
            rating={product.rating}
            viewer={product.viewer}
            id={product.id}
            discount={product.price_after_discount}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;
