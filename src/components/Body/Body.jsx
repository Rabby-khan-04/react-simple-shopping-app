import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Body = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  const handelCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
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
          <div className="w-full z-50">
            <h2 className="text-center text-2xl font-semibold mb-14">
              Order Summary
            </h2>
            <p className="text-xl font-medium mb-6">
              Selected Items: {cart.length}
            </p>
            <p className="text-xl font-medium mb-6">Total Price: $1140</p>
            <p className="text-xl font-medium mb-6">
              Total Shipping Charge: $5
            </p>
            <p className="text-xl font-medium mb-6">
              Total Shipping Charge: $5
            </p>
            <p className="text-xl font-medium">Grand Total: $1559</p>
            <div className="mt-14">
              <button className="btn bg-neutral font-bold border-none w-full mb-4 hover:bg-secondary">
                Clear Cart
                <span className="inline-block ml-2">
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
              </button>
              <button className="btn bg-secondary border-none font-bold w-full">
                Review Order
                <span className="inline-block ml-2">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
