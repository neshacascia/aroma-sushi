import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className="text-white bg-black h-20 fixed top-0 z-10 w-screen flex justify-between items-center px-8">
      <FontAwesomeIcon icon={faBars} className=""></FontAwesomeIcon>

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
