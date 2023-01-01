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

  const closeModal = () => {
    setModalopen(false);
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
        id={todoList[index].id}
        title={todoList[index].title}
        priority={todoList[index].priority}
        description={todoList[index].description}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleIsDone={() => setDone(todoList[index].id)}
      />
      <EditFormModal
        closeModal={closeModal}
        openModal={modalopen}
        onFinish={onFinish}
        title={todoList[index].title}
        memo={todoList[index].memo}
        description={todoList[index].description}
        priority={todoList[index].priority}
      />
    </div>
  );
};

export default EditForm;
