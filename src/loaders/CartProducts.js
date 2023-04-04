import { getItemFromDB } from "../../utilities/fakedb";

export const cartLoader = async () => {
  const loadedProduct = await fetch("products.json");
  const products = await loadedProduct.json();

  const savedCart = [];
  const storedCart = getItemFromDB();

  for (const id in storedCart) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      addedProduct.quantity = storedCart[id];
      savedCart.push(addedProduct);
    }
  }

  return savedCart;
};
