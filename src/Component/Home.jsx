import React from "react";
import Product from "./Product";
import data from "../../data/product.json";

function Home() {
  return (
    <main>
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
