// // use local storage to manage cart data
// const addToDb = id => {
//     let shoppingCart = getShoppingCart();
//     // add quantity
//     const quantity = shoppingCart[id];
//     if (!quantity) {
//         shoppingCart[id] = 1;
//     }
//     else {
//         const newQuantity = quantity + 1;
//         shoppingCart[id] = newQuantity;
//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
// }

// const removeFromDb = id => {
//     const shoppingCart = getShoppingCart();
//     if (id in shoppingCart) {
//         delete shoppingCart[id];
//         localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//     }
// }

// const getShoppingCart = () => {
//     let shoppingCart = {};

//     //get the shopping cart from local storage
//     const storedCart = localStorage.getItem('shopping-cart');
//     if (storedCart) {
//         shoppingCart = JSON.parse(storedCart);
//     }
//     return shoppingCart;
// }

// const deleteShoppingCart = () => {
//     localStorage.removeItem('shopping-cart');
// }

// export {
//     addToDb,
//     removeFromDb,
//     getShoppingCart,
//     deleteShoppingCart
// }

const addToDB = (id) => {
  const storedCart = getItemFromDB();
  const qty = storedCart[id];
  if (qty) {
    storedCart[id] = qty + 1;
  } else {
    storedCart[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(storedCart));
};

const getItemFromDB = () => {
  let cartItem = {};

  const strCartItem = localStorage.getItem("shopping-cart");
  if (strCartItem) {
    cartItem = JSON.parse(strCartItem);
  }

  return cartItem;
};

export { addToDB, getItemFromDB };
