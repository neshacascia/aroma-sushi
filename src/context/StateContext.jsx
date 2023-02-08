import { createContext, useState } from 'react';

const StateContext = createContext();

function StateContextProvider(props) {
  const [isClicked, setIsClicked] = useState(false);

  function openMobileMenu() {
    setIsClicked(true);
  }

  function closeMobileMenu() {
    setIsClicked(false);
  }
  return (
    <StateContext.Provider
      value={{ isClicked, openMobileMenu, closeMobileMenu }}
    >
      {props.children}
    </StateContext.Provider>
  );
}

export { StateContext, StateContextProvider };
