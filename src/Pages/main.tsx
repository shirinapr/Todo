import React from 'react';

import Tasks from '../blocks/Tasks';
import Header from '../blocks/Header';
import CreateTask from '../blocks/CreateTask';
import { useTodoContext } from '../Context/TodoProvider';

const Main = () => {
  const { todoList } = useTodoContext();

  const onGoingTodos = todoList.filter(
    (todo) => todo.status === 'ongoing',
  );

  return (
    <>
      <Header />
      {onGoingTodos.length ? <Tasks /> : <CreateTask />}
    </>
  );
};

export default Main;
