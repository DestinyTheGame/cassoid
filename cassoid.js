import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Smith, Welcome, Telesto } from './src';
import { createRoot } from 'react-dom/client';
import React from 'react';

export const router = createBrowserRouter([{
  path: '/',
  element: <Welcome />
}, {
  path: '/:weapon',
  element: <Smith />,
  errorElement: <Telesto />,
  loader: function loader({ params }) {
    return fetch(`/data/weapons/${params.weapon}.json`);
  }
}]);

//
// We only want this code to execute when we're in an actual browser
// environment or this would cause issues when running tests.
//
if (typeof document !== 'undefined') {
  const root = document.getElementById('cassoid');
  createRoot(root).render(<RouterProvider router={router} />);
}
