import {
  faMagnifyingGlass,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import {
  addToDB,
  deleteShoppingCart,
  getItemFromDB,
} from "../../../utilities/fakedb";
import Product from "../Product/Product";
import Summary from "../Summary/Summary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoaderData, useNavigate } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const { totalProducts } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(0);
  const [productPerPage, setProductPerPage] = useState(10);

  const totalPage = Math.ceil(totalProducts / productPerPage);
  const pageNumbers = [...Array(totalPage).keys()];
  const options = [10, 20, 30];

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const savedCart = [];
    const storedCart = getItemFromDB();
    for (const id in storedCart) {
      const addedProduct = products.find((pd) => pd._id === id);
      if (addedProduct) {
        addedProduct.quantity = storedCart[id];
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handelCart = (product) => {
    let newCart = [];
    const exitst = cart.find((pd) => pd._id === product._id);
    if (exitst) {
      exitst.quantity = exitst.quantity + 1;
      const remaining = cart.filter((pd) => pd._id !== product._id);
      newCart = [...remaining, exitst];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDB(product._id);
  };

  const clearCartItem = () => {
    setCart([]);
    deleteShoppingCart();
  };

  const navigate = useNavigate();
  const goToOrderReviewPage = () => {
    navigate("/orders");
  };

  const handleProductPerPage = (event) => {
    const numberOfProduct = Number(event.target.value);
    setProductPerPage(numberOfProduct);
    setCurrentPage(0);
  };

  return (
    <section>
      <div className=" grid grid-cols-4">
        <div className="col-span-3 px-24 py-28 space-y-6">
          <div className="flex justify-end items-center gap-4">
            <p className="text-xl font-semibold">Select product per page:</p>
            <select
              name="numberOfProduct"
              className="input input-bordered"
              defaultValue={options[0]}
              onChange={handleProductPerPage}
              id=""
            >
              {options.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-3 gap-10">
            {products.map((product) => (
              <Product
                key={product._id}
                handelCart={handelCart}
                productDetails={product}
              />
            ))}
          </div>

          {/* Pagenation */}
          <div className="flex justify-center items-center gap-4">
            {pageNumbers.map((number) => (
              <button
                className={`${
                  currentPage === number ? "" : "btn-outline"
                } btn btn-primary`}
                onClick={() => setCurrentPage(number)}
                key={number}
              >
                {number}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-accent relative">
          <Summary clearCartItem={clearCartItem} cart={cart}>
            <button
              onClick={goToOrderReviewPage}
              className="btn bg-secondary border-none font-bold w-full"
            >
              Review Order
              <span className="inline-block ml-2">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
            </button>
          </Summary>
        </div>
      </div>
    </section>
  );
};

export default Shop;
