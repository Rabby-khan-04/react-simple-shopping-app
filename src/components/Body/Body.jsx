import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Summary from "../Summary/Summary";

const Body = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  const handelCart = (product) => {
    let newCart;

    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
      newCart = JSON.parse(storedCart);
    } else {
      newCart = [];
    }
    newCart.push(product);

    localStorage.setItem("shopping-cart", JSON.stringify(newCart));
    setCart([...newCart]);
  };

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
            <Product
              key={product.id}
              handelCart={handelCart}
              productDetails={product}
            />
          ))}
        </div>
        <div className="bg-accent relative p-6">
          <Summary cart={cart}></Summary>
        </div>
      </div>
    </section>
  );
};

export default Body;
