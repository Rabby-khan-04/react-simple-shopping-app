import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Body = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section>
      <div className=" grid grid-cols-4">
        <div className="col-span-3 px-24 grid grid-cols-3 gap-10 py-28">
          {products.map((product) => (
            <Product key={product.id} productDetails={product} />
          ))}
        </div>
        <div className="bg-accent">
          <h2>hello</h2>
        </div>
      </div>
    </section>
  );
};

export default Body;
