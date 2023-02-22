import { createContext, useState } from 'react';
import useFetch from '../components/hooks/useFetch';

import { getProductData } from '../../data';

export const CartContext = createContext({
  items: [],
  getProductQty: () => {},
  addItem: () => {},
  increaseItem: () => {},
  decreaseItem: () => {},
  removeItem: () => {},
  getTotalCost: () => {},
});

export default function CartProvider(props) {
  const { data } = useFetch('/menus?populate=*');

  const [cartProducts, setCartProducts] = useState(data);

  function getProductQty(id) {
    const quantity = cartProducts.find(product => product.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }
  }

  function addItem(id, qty) {
    const quantity = getProductQty(id);

    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: qty }]);
    } else {
      setCartProducts(
        cartProducts.map(product =>
          product.id === id
            ? { ...product, quantity: product.quantity + qty }
            : product
        )
      );
    }
  }

  function getTotalCost() {
    let totalCost = 0;

    cartProducts.map(cartItem => {
      const productData = getProductData(data, cartItem.id);

      totalCost += productData.attributes.price * cartItem.quantity;
    });

    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductQty,
    addItem,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
}
