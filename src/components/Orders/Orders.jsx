import React from "react";
import Summary from "../Summary/Summary";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const cart = useLoaderData();
  console.log(cart);
  return (
    <section>
      <div className=" grid grid-cols-5">
        <div className="col-span-3 px-24">{cart.length}</div>
        <div className="col-span-2 bg-accent relative p-6">
          <Summary cart={cart} />
        </div>
      </div>
    </section>
  );
};

export default Orders;
