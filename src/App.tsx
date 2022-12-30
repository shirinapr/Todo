import React from 'react';
import Header from './components/Header';
import CreateTaks from './blocks/CreateTask';
import Item from './components/Item';
import TodoProvider from './Context/TodoProvider';

const App = () => {
  return (
    <TodoProvider>
      <Header />
      <CreateTaks />
      {/* <Item
        title={'sdfsdfa'}
        description={'sdfasdf'}
        priority={'asdfasd'}
      /> */}
    </TodoProvider>
  );
};

export default App;
