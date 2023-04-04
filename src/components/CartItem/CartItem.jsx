import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CartItem = ({ product, deleteCartItem }) => {
  const { img, name, price, quantity, id } = product;
  return (
    <div className="flex justify-between items-center border border-border_color rounded-lg mb-5 p-2">
      <div className="flex gap-4">
        <img
          src={img}
          className="w-24 min-h-full object-cover inline-block rounded-lg"
          alt=""
        />
        <div>
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <p className="text-base font-semibold">Quantity: {quantity}</p>
          <p className="text-base font-semibold">
            Price: <span className="text-secondary">${price}</span>
          </p>
        </div>
      </div>
      <button
        onClick={() => deleteCartItem(id)}
        className="bg-warning h-12 w-12 bg-opacity-30 border-none rounded-full text-warning"
      >
        <FontAwesomeIcon className="text-2xl" icon={faTrashCan} />
      </button>
    </div>
  );
};

export default CartItem;
