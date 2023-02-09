import { useContext } from 'react';
import { StateContext } from '../../context/StateContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function CartModal() {
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
        <p className="px-6 py-10 text-center">No items found.</p>
      </div>
    </div>
  );
}
