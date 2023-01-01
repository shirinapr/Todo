import React from 'react';

import Main from './Pages/main';
import TodoProvider from './Context/TodoProvider';

const App = () => {
  return (
    <TodoProvider>
      <Main />
    </TodoProvider>
  );
};

export default App;
