import React from 'react';
import Header from './components/Header';
import CreateTaks from './blocks/CreateTask';
import Item from './components/Item';
import TodoProvider from './Context/TodoProvider';
import Tasks from './blocks/Tasks';

const App = () => {
  return (
    <TodoProvider>
      <Header />
      <CreateTaks />
      <Tasks />
    </TodoProvider>
  );
};

export default App;
