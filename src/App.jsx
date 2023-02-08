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

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{ index: true, element: <Home /> }],
  },
]);

function App() {
  const { isClicked } = useContext(StateContext);

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
    </div>
  );
}

export default App;
