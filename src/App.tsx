import React from 'react';

import TodoProvider from './Context/TodoProvider';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Main from './Pages/main';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
    },
  ]);
  return (
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  );
};

export default App;
