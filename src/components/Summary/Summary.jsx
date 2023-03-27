import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
const Summary = (props) => {
  const { cart } = props;
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  const tax = (totalPrice * 7) / 100;
  const shipping = cart.reduce((acc, curr) => acc + curr.shipping, 0);
  return (
    <div className="sticky top-4 w-full z-50">
      <h2 className="text-center text-2xl font-semibold mb-14">
        Order Summary
      </h2>
      <p className="text-xl font-medium mb-6">Selected Items: {cart.length}</p>
      <p className="text-xl font-medium mb-6">Total Price: ${totalPrice}</p>
      <p className="text-xl font-medium mb-6">
        Total Shipping Charge: ${shipping}
      </p>
      <p className="text-xl font-medium mb-6">Tax: ${tax.toFixed(2)}</p>
      <p className="text-xl font-medium">
        Grand Total: ${(totalPrice + shipping + tax).toFixed(2)}
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
