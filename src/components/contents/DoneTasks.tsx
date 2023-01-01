import React from 'react';

import Item from '../Item';

import { useTodoContext } from '../../Context/TodoProvider';

const DoneTasks = () => {
  const { todoList, setDone } = useTodoContext();

  return (
    <div>
      {!todoList.length ? (
        <p className="center mt-20 text-xl">Empty</p>
      ) : (
        todoList
          .filter((todo) => todo.status === 'done')
          .map((todo, i) => (
            <div key={i}>
              <Item
                type="primary"
                id={todo.id}
                hasButtons={false}
                title={todo.title}
                description={todo.description}
                priority={todo.priority}
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
