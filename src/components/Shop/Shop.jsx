import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { addToDB, getItemFromDB } from "../../../utilities/fakedb";
import Product from "../Product/Product";
import Summary from "../Summary/Summary";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const savedCart = [];
    const storedCart = getItemFromDB();
    for (const id in storedCart) {
      const addedProduct = products.find((pd) => pd.id === id);
      if (addedProduct) {
        addedProduct.quantity = storedCart[id];
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handelCart = (product) => {
    let newCart = [];
    const exitst = cart.find((pd) => pd.id === product.id);
    if (exitst) {
      exitst.quantity = exitst.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exitst];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDB(product.id);
  };
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

export default Shop;
