import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { StateContext } from './context/StateContext';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import Root from './components/Root';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

import MobileMenuModal from './components/modals/MobileMenuModal';
import CartModal from './components/modals/CartModal';

import './App.css';

function App() {
  const { isClicked, isCartOpen } = useContext(StateContext);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
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
    </div>
  );
}

export default App;
