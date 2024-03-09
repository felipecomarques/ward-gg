import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './components/pages/HomePage.jsx';
import MatchDetails from './components/pages/MatchDetails.jsx';
import Profile from './components/pages/Profile.jsx';
import BasePage from './components/pages/BasePage.jsx';
import Maestria from './components/Maestria.jsx'; // Importe o componente Maestria

const router = createBrowserRouter([
  {
    path: '/',
    element: <BasePage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/player/:playerId/username/:username/tag/:tag',
        element: <Profile />,
      },
      {
        path: '/match/:matchId/player/:playerId',
        element: <MatchDetails />,
      },
      {
        path: '/mais-campeoes', 
        element: <Maestria />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
