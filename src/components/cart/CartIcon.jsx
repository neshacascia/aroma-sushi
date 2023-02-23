import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function CartIcon() {
  const cart = useContext(CartContext);

  const totalItems = cart.items.length;

  return (
    <div className="w-cartIcon bg-gold rounded-md z-10 absolute flex justify-center items-center left-4 bottom-4 select-none">
      <span className="text-white text-xs text-center">{totalItems}</span>
    </div>
  );
}
