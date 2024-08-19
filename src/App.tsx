import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import Bio from './components/ui/Bio';
import Experience from './components/ui/Experience';
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
          path: '/bio',
          element: <Bio />,
        },
        {
          path: '/experience',
          element: <Experience />,
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
