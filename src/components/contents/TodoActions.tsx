import React, { useState } from 'react';

import Item from '../Item';
import { ITodo, useTodoContext } from '../../Context/TodoProvider';

import EditFormModal from '../../blocks/Modals/EditTask';

type Props = {
  currentId: string;
  closeDetailsModal: () => void;
};

const EditForm = ({ currentId, closeDetailsModal }: Props) => {
  const [modalopen, setModalopen] = useState(false);

  const { todoList, setDone, removeTodo, editTodo } =
    useTodoContext();

  const index = todoList.findIndex((x) => x.id === currentId);

  const handleEdit = () => {
    setModalopen(true);
  };

  const handleDelete = () => {
    closeDetailsModal();
    removeTodo(todoList[index].id);
  };

  const onFinish = (values: ITodo) => {
    editTodo(todoList[index].id, values);
    setModalopen(false);
  };

  if (index === -1) {
    return (
      <p className="center h-[150px] text-red-500">Task deleted</p>
    );
  }
  return (
    <div>
      <Item
        type="secondary"
        todo={todoList[index]}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleIsDone={() => setDone(todoList[index].id)}
      />
      <EditFormModal
        closeModal={() => setModalopen(false)}
        openModal={modalopen}
        onFinish={onFinish}
        todo={todoList[index]}
      />
    </div>
  );
};

export default EditForm;
