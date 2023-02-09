import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { StateContext } from './context/StateContext';
import {
  createBrowserRouter,
  RouterProvider,
  MemoryRouter,
} from 'react-router-dom';
import Root from './components/Root';
import Home from './pages/Home';
import MobileMenuModal from './components/modals/MobileMenuModal';
import CartModal from './components/modals/CartModal';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{ index: true, element: <Home /> }],
  },
]);

function App() {
  const { isClicked, isCartOpen } = useContext(StateContext);

  return (
    <div className="App">
      <RouterProvider router={router} />

      {isClicked &&
        ReactDOM.createPortal(
          <MemoryRouter>
            <MobileMenuModal />
          </MemoryRouter>,
          document.getElementById('mobile-menu-modal-root')
        )}

      {isCartOpen &&
        ReactDOM.createPortal(
          <MemoryRouter>
            <CartModal />
          </MemoryRouter>,
          document.getElementById('cart-modal-root')
        )}
    </div>
  );
}

export default App;
