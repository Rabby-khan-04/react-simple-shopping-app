import React from "react";
import logo from "../../assets/images/Logo.svg";

const Header = () => {
  return (
    <header className="bg-primary py-5">
      <nav className="px-24 flex flex-row items-center justify-between">
        <div id="logo">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <ul className="flex flex-row items-center gap-8 text-white text-xl font-medium">
          <li>
            <a href="/order">Order</a>
          </li>
          <li>
            <a href="/order-review">Order Review</a>
          </li>
          <li>
            <a href="/manage-inventory">Manage Inventory</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
