import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login';
import Browse from './components/Browse';

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login/>
    },
    {
      path: '/browse',
      element: <Browse/>
    },

  ])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App