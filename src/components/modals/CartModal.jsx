import { useContext } from 'react';
import { StateContext } from '../../context/StateContext';
import Cart from '../cart/Cart';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';

export default function CartModal() {
  const cart = useContext(CartContext);

  const { closeModals } = useContext(StateContext);

  return (
    <div className="bg-overlay h-screen w-screen fixed z-20 grid place-items-center">
      <div className="bg-white w-3/4 h-auto flex flex-col fixed">
        <div className="font-heading flex justify-between px-6 py-6">
          <span className="font-bold">YOUR CART</span>

          <button onClick={closeModals} className="text-xl hover:text-gold">
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
          </button>
        </div>

        <hr />
        <Cart />

        {cart.items.length > 0 && (
          <button className="bg-black font-heading font-bold text-white tracking-wider h-14 px-8 py-4 my-6 mx-16 hover:bg-gold btn-fade">
            CHECKOUT
          </button>
        )}
      </div>
    </div>
  );
}
