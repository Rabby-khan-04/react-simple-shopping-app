import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import img404 from "../../assets/images/404.jpg";

const Product = (props) => {
  const { name, price, seller, ratings, img } = props.productDetails;
  const handelCart = props.handelCart;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="p-2">
        <img src={img ? img : img404} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="flex flex-col h-72 justify-between">
        <div className="p-2 text-left">
          <h2 className="text-xl font-semibold my-3 ">{name}</h2>
          <p className="text-base font-semibold mb-12">Price : ${price}</p>

          <p className="text-sm font-medium mb-3">Manufacturer : {seller}</p>
          <p className="text-sm font-medium mb-3">Rating : {ratings} Stars</p>
          <div className="card-actions"></div>
        </div>
        <button
          onClick={() => handelCart(props.productDetails)}
          className="btn btn-accent"
        >
          Add To Cart <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
    </div>
  );
};

export default Product;
