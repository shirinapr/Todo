import React from 'react';
import Item from '../Item/secondary';
import { useTodoContext } from '../../Context/TodoProvider';
import { nanoid } from 'nanoid';

const EditForm = () => {
  const { todoList, setDone } = useTodoContext();

  return (
    <div>
      <Item
        id={nanoid()}
        title={todoList[0].title}
        priority={todoList[0].priority}
        description={todoList[0].description}
        handleIsDone={() => setDone(todoList[0].id)}
        handleDelete={function (): void {}}
        handleEdit={function (): void {}}
      />
    </div>
  );
};

export default EditForm;
