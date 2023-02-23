import { useContext } from 'react';
import { StateContext } from '../context/StateContext';
import { CartContext } from '../context/CartContext';
import CartIcon from './cart/CartIcon';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const cart = useContext(CartContext);

  const { openMobileMenu, openCart } = useContext(StateContext);

  return (
    <nav className="text-white bg-black h-20 fixed top-0 z-10 w-screen flex justify-between items-center px-8">
      <button onClick={openMobileMenu}>
        <FontAwesomeIcon
          icon={faBars}
          className="text-xl hover:text-gold"
        ></FontAwesomeIcon>
      </button>

      <div className="relative">
        {cart.items.length > 0 && <CartIcon />}

        <button className="font-heading relative" onClick={openCart}>
          <FontAwesomeIcon
            icon={faCartShopping}
            className="mr-2"
          ></FontAwesomeIcon>
        </button>
      </div>
    </nav>
  );
}
