import React from "react";
import Summary from "../Summary/Summary";
import { useLoaderData } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Orders = () => {
  const cart = useLoaderData();
  console.log(cart);
  return (
    <section className="w-3/5 mx-auto py-20">
      <div className=" grid grid-cols-5 gap-12">
        <div className="col-span-3">
          {cart.map((product) => (
            <CartItem product={product} />
          ))}
        </div>
        <div className="col-span-2 relative p-6 rounded-lg">
          <Summary cart={cart} />
        </div>
      </div>
    </section>
  );
};

export default Orders;
