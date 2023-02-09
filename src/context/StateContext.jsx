import { createContext, useState } from 'react';

const StateContext = createContext();

function StateContextProvider(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function openMobileMenu() {
    setIsClicked(true);
  }

  function closeModals() {
    setIsClicked(false);
    setIsCartOpen(false);
  }

  function openCart() {
    setIsCartOpen(true);
  }

  return (
    <StateContext.Provider
      value={{ isClicked, openMobileMenu, closeModals, isCartOpen, openCart }}
    >
      {props.children}
    </StateContext.Provider>
  );
}

export { StateContext, StateContextProvider };
