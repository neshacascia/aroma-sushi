import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { StateContext } from './context/StateContext';
import CartProvider from './context/CartContext';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';

import MobileMenuModal from './components/modals/MobileMenuModal';
import CartModal from './components/modals/CartModal';
import ItemModal from './components/modals/ItemModal';

import './App.css';

function App() {
  const { isClicked, isCartOpen, itemOpened } = useContext(StateContext);

  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
        </Routes>

        {isClicked &&
          ReactDOM.createPortal(
            <MobileMenuModal />,
            document.getElementById('mobile-menu-modal-root')
          )}

        {isCartOpen &&
          ReactDOM.createPortal(
            <CartModal />,
            document.getElementById('cart-modal-root')
          )}

        {itemOpened &&
          ReactDOM.createPortal(
            <ItemModal />,
            document.getElementById('item-modal-root')
          )}
      </div>
    </CartProvider>
  );
}

export default App;
