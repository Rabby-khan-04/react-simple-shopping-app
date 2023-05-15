import React, { useState } from "react";
import Summary from "../Summary/Summary";
import { useLoaderData, useNavigate } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { deleteShoppingCart, removeFromDB } from "../../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const deleteCartItem = (id) => {
    removeFromDB(id);
    const restItem = cart.filter((product) => product._id !== id);
    setCart(restItem);
  };

  const clearCartItem = () => {
    setCart([]);
    deleteShoppingCart();
  };

  const navigate = useNavigate();
  const goToOrderCheckoutPage = () => {
    clearCartItem();
    navigate("/checkout");
  };

  return (
    <section className="w-3/5 mx-auto py-20">
      <div className=" grid grid-cols-5 gap-12">
        <div className="col-span-3">
          {cart.map((product) => (
            <CartItem
              product={product}
              key={product._id}
              deleteCartItem={deleteCartItem}
            />
          ))}
        </div>
        <div className="col-span-2 relative p-6 rounded-lg">
          <Summary clearCartItem={clearCartItem} cart={cart}>
            <button
              onClick={goToOrderCheckoutPage}
              className="btn bg-secondary border-none font-bold w-full"
            >
              Proceed Checkout
              <span className="inline-block ml-2">
                <FontAwesomeIcon icon={faCreditCard} />
              </span>
            </button>
          </Summary>
        </div>
      </div>
    </section>
  );
};

export default Orders;
