import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../../context/StateContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { navbarData } from '../../../data';

export default function MobileMenuModal() {
  const { closeModals } = useContext(StateContext);

  const navbarLinks = navbarData.map(link => (
    <Link
      key={link.id}
      to={link.path}
      className="hover:text-gold"
      onClick={closeModals}
    >
      {link.title}
    </Link>
  ));

  return (
    <nav className="bg-black text-white h-auto w-screen fixed z-20 border-t-line py-6 mt-20">
      <button
        className="text-xl absolute right-0 pr-10 hover:text-gold"
        onClick={closeModals}
      >
        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
      </button>

      <ul className="font-heading flex flex-col items-center gap-2">
        {navbarLinks}
      </ul>
    </nav>
  );
}
