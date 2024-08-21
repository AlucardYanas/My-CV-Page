import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout';
import MainPage from './components/pages/MainPage';
import Portfolio from './components/ui/Portfolio';

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: 'portfolio',
          element: <Portfolio />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
