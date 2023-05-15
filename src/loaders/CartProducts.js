import { getItemFromDB } from "../../utilities/fakedb";

export const cartLoader = async () => {
  const loadedProduct = await fetch("http://localhost:3000/products");
  const products = await loadedProduct.json();

  const savedCart = [];
  const storedCart = getItemFromDB();

  for (const id in storedCart) {
    const addedProduct = products.find((product) => product._id === id);
    if (addedProduct) {
      addedProduct.quantity = storedCart[id];
      savedCart.push(addedProduct);
    }
  }

  return savedCart;
};
