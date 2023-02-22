import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';

export default function Cart() {
  const cart = useContext(CartContext);

  const cartItems = (
    <ul className="py-4">
      {cart.items.map(item => (
        <CartItem key={item.id} id={item.id} quantity={item.quantity} />
      ))}
    </ul>
  );

  return (
    <div>
      {cart.items.length > 0 ? (
        <>
          {cartItems}
          <hr />
          <div className="text-lg flex items-center mt-4 px-6">
            <h1 className="text-gray-500 text-base mr-auto">Subtotal: </h1>
            <span className="font-bold">${cart.getTotalCost().toFixed(2)}</span>
          </div>
        </>
      ) : (
        <div className="h-full flex justify-center items-center">
          <p className="px-6 py-6">Your cart is empty.</p>
        </div>
      )}
    </div>
  );
}
