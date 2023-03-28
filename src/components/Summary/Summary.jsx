import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
const Summary = (props) => {
  const { cart } = props;
  let quantity = 0;
  let price = 0;
  let shipping = 0;
  for (const product of cart) {
    quantity += product.quantity;
    price = price + product.price * product.quantity;
    shipping += product.shipping;
  }
  const tax = (price * 7) / 100;
  return (
    <div className="sticky top-4 w-full z-50">
      <h2 className="text-center text-2xl font-semibold mb-14">
        Order Summary
      </h2>
      <p className="text-xl font-medium mb-6">Selected Items: {quantity}</p>
      <p className="text-xl font-medium mb-6">Total Price: ${price}</p>
      <p className="text-xl font-medium mb-6">
        Total Shipping Charge: ${shipping}
      </p>
      <p className="text-xl font-medium mb-6">Tax: ${tax.toFixed(2)}</p>
      <p className="text-xl font-medium">
        Grand Total: ${(price + shipping + tax).toFixed(2)}
      </p>
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
  );
};

export default Summary;
