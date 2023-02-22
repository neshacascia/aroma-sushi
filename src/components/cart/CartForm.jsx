import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import { getProductData } from '../../../data';

export default function CartForm(props) {
  const cart = useContext(CartContext);

  function increaseQuantity() {
    setNewQuantity(prevQuantity => prevQuantity + 1);
  }

  function decreaseQuantity() {
    setNewQuantity(prevQuantity => prevQuantity - 1);
  }

  return (
    <div className="flex justify-between gap-4">
      <button onClick={decreaseQuantity} type="button">
        <FontAwesomeIcon
          icon={faMinus}
          className="hover:text-gold"
        ></FontAwesomeIcon>
      </button>
      <input
        type="number"
        className="text-black pl-2"
        value={newQuantity}
        min="0"
        max="10"
        disabled
      />
      <button onClick={increaseQuantity} type="button">
        <FontAwesomeIcon
          icon={faPlus}
          className="hover:text-gold"
        ></FontAwesomeIcon>
      </button>
    </div>
  );
}
