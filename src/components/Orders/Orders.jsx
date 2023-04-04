import React, { useState } from "react";
import Summary from "../Summary/Summary";
import { useLoaderData } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { deleteShoppingCart, removeFromDB } from "../../../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();
  const [reviewBtn, setReviewBtn] = useState(true);
  const [cart, setCart] = useState(savedCart);

  const deleteCartItem = (id) => {
    removeFromDB(id);
    const restItem = cart.filter((product) => product.id !== id);
    setCart(restItem);
  };

  const clearCartItem = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <section className="w-3/5 mx-auto py-20">
      <div className=" grid grid-cols-5 gap-12">
        <div className="col-span-3">
          {cart.map((product) => (
            <CartItem
              product={product}
              key={product.id}
              deleteCartItem={deleteCartItem}
            />
          ))}
        </div>
        <div className="col-span-2 relative p-6 rounded-lg">
          <Summary
            reviewBtn={reviewBtn}
            clearCartItem={clearCartItem}
            cart={cart}
          />
        </div>
      </div>
    </section>
  );
};

export default Orders;
