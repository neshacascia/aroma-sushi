import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../../context/StateContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { navbarData } from '../../../data';

const navbarLinks = navbarData.map(link => (
  <li key={link.id}>
    <Link to={link.path} className="hover:text-gold">
      {link.title}
    </Link>
  </li>
));

export default function MobileMenuModal() {
  const { closeModals } = useContext(StateContext);

  return (
    <div className="bg-black text-white h-auto w-screen fixed border-t-line py-6 mt-20">
      <button
        className="text-xl absolute right-0 pr-10 hover:text-gold"
        onClick={closeModals}
      >
        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
      </button>

      <ul className="font-heading flex flex-col items-center gap-2">
        {navbarLinks}
      </ul>
    </div>
  );
}
