import React from 'react';

import Item from '../Item';

import { useTodoContext } from '../../Context/TodoProvider';

const DoneTasks = () => {
  const { todoList, setDone } = useTodoContext();

  const DoneTodos = todoList.filter((todo) => todo.status === 'done');

  return (
    <div>
      {!DoneTodos.length ? (
        <p className="center mt-20 text-xl">Empty</p>
      ) : (
        DoneTodos.map((todo, i) => (
          <div key={i}>
            <Item
              type="primary"
              minimized
              hasButtons={false}
              todo={todo}
              handleIsDone={() => setDone(todo.id)}
              handleEdit={() => console.log('hey')}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default DoneTasks;
