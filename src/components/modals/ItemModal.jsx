import { useContext, useState } from 'react';
import { StateContext } from '../../context/StateContext';
import { CartContext } from '../../context/CartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function ItemModal() {
  const cart = useContext(CartContext);

  const { selectedItem, closeModals } = useContext(StateContext);

  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  function decreaseQuantity() {
    setQuantity(prevQuantity => prevQuantity - 1);
  }

  function addToCartHandler(e) {
    e.preventDefault();

    if (quantity !== 0) {
      cart.addItem(selectedItem.id, quantity);
    }
  }

  const disabledMinusButton = quantity === 1;

  return (
    <div className="bg-overlay h-screen w-screen fixed z-20 grid place-items-center">
      <div className="bg-white font-heading w-3/4 h-auto flex flex-col fixed">
        <div className=" flex justify-between p-6">
          <span className="text-lg font-bold">{selectedItem.name}</span>

          <button onClick={closeModals} className="text-xl hover:text-gold">
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
          </button>
        </div>

        <hr />

        <form className="flex flex-col gap-6 p-6" onSubmit={addToCartHandler}>
          <div className="flex flex-col gap-2">
            <label htmlFor="instructions" className="font-bold">
              Special Instructions
            </label>
            <textarea
              type="text"
              id="instructions"
              placeholder="No wasabi please..."
              className="text-black text-xs border-2 py-2 pl-4"
            ></textarea>
          </div>

          <div className="flex justify-between">
            <label htmlFor="quantity" className="font-bold w-1/2">
              Quantity
            </label>
            <div className="flex justify-between gap-4">
              <button
                onClick={decreaseQuantity}
                disabled={disabledMinusButton}
                type="button"
              >
                <FontAwesomeIcon
                  icon={faMinus}
                  className="hover:text-gold"
                ></FontAwesomeIcon>
              </button>
              <input
                type="number"
                className="text-black pl-2"
                value={quantity}
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
          </div>

          <button
            className="text-white bg-black flex justify-center gap-4 py-4 mx-8 hover:bg-gold btn-add"
            type="submit"
          >
            <span className="border-white border-r-button pr-4">
              ${(selectedItem.price * quantity).toFixed(2)}
            </span>
            <span>Add to Cart</span>
          </button>
        </form>
      </div>
    </div>
  );
}
