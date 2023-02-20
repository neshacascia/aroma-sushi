import { useContext } from 'react';
import { StateContext } from '../../context/StateContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function ItemModal() {
  const { selectedItem, closeModals, selectedItemPrice } =
    useContext(StateContext);
  const { quantity, setQuantity } = useState(1);

  function increaseQuantity() {
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  function decreaseQuantity() {
    setQuantity(prevQuantity => prevQuantity - 1);
  }

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="bg-overlay h-screen w-screen fixed z-20 grid place-items-center">
      <div className="bg-white font-heading w-3/4 h-auto flex flex-col fixed">
        <div className=" flex justify-between p-6">
          <span className="text-lg font-bold">{selectedItem}</span>

          <button onClick={closeModals} className="text-xl hover:text-gold">
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
          </button>
        </div>

        <hr />

        <form className="flex flex-col gap-4 p-6" onSubmit={submitHandler}>
          <div className="flex flex-col gap-2">
            <label htmlFor="instructions" className="font-bold">
              Special Instructions
            </label>
            <input
              type="text"
              id="instructions"
              placeholder="No wasabi please..."
              className="text-black text-xs border-2 py-2 pl-4"
            />
          </div>

          <div className="flex justify-between">
            <label htmlFor="quantity" className="font-bold w-1/2">
              Quantity
            </label>
            <div className="flex justify-between gap-4">
              <button onClick={increaseQuantity}>
                <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
              </button>
              <input
                type="number"
                className="text-black"
                value="1"
                min="0"
                max="10"
              />
              <button onClick={decreaseQuantity}>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </button>
            </div>
          </div>

          <button className="text-white bg-black flex justify-center gap-4 py-4 mx-8" onClick={closeModals}>
            <span className="border-white border-r-button pr-4">
              ${selectedItemPrice}
            </span>
            <span>Add to Cart</span>
          </button>
        </form>
      </div>
    </div>
  );
}
