import React from 'react';

import Item from '../Item';
import { nanoid } from 'nanoid';
import { useTodoContext } from '../../Context/TodoProvider';

const DoneTasks = () => {
  const { todoList, setDone } = useTodoContext();

  return (
    <div>
      {todoList
        .filter((todo) => todo.status === 'done')
        .map((todo, i) => (
          <div key={i}>
            <Item
              id={nanoid()}
              title={todo.title}
              description={todo.description}
              priority={todo.priority}
              handleIsDone={() => setDone(todo.id)}
              hasButtons={false}
            />
          </div>
        ))}
    </div>
  );
};

export default DoneTasks;
