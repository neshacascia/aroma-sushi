import { useContext } from 'react';
import { StateContext } from '../context/StateContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const { openMobileMenu } = useContext(StateContext);

  return (
    <nav className="text-white bg-black h-20 fixed top-0 z-10 w-screen flex justify-between items-center px-8">
      <button onClick={openMobileMenu}>
        <FontAwesomeIcon
          icon={faBars}
          className="text-xl hover:text-gold"
        ></FontAwesomeIcon>
      </button>

      <button className="font-heading">
        <FontAwesomeIcon
          icon={faCartShopping}
          className="mr-2"
        ></FontAwesomeIcon>
        Cart
      </button>
    </nav>
  );
}
