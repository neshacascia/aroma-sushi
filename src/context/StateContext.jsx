import { createContext, useState } from 'react';

const StateContext = createContext();

function StateContextProvider(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [itemOpened, setItemOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedItemPrice, setSelectedItemPrice] = useState(0);

  function openMobileMenu() {
    setIsClicked(true);
  }

  function closeModals() {
    setIsClicked(false);
    setIsCartOpen(false);
    setItemOpened(false);
  }

  function openCart() {
    setIsCartOpen(true);
  }

  return (
    <StateContext.Provider
      value={{
        isClicked,
        isCartOpen,
        itemOpened,
        setItemOpened,
        openMobileMenu,
        closeModals,
        openCart,
        setSelectedItem,
        selectedItem,
        selectedItemPrice,
        setSelectedItemPrice,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
}

export { StateContext, StateContextProvider };
