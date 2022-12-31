import React, { useState } from 'react';

import Item from '../../Item/secondary';
import { ITodo, useTodoContext } from '../../../Context/TodoProvider';

import { nanoid } from 'nanoid';
import { Modal } from 'antd';
import FormComponent from './Form';

type Props = {
  currentId: string;
};
const EditForm = ({ currentId }: Props) => {
  const [modalopen, setModalopen] = useState(false);

  const { todoList, setDone, removeTodo, editTodo } =
    useTodoContext();

  const Id = todoList.findIndex((x) => x.id === currentId);

  const handleEdit = () => {
    setModalopen(true);
  };

  const handleDelete = () => {
    removeTodo(todoList[Id].id);
  };

  const ClsoeModal = () => {
    setModalopen(false);
  };

  const onFinish = (values: ITodo) => {
    editTodo(onGoingTodos[Id].id, values);
  };

  const onGoingTodos = todoList.filter(
    (todo) => todo.status === 'ongoing',
  );
  return (
    <div>
      <Item
        id={nanoid()}
        title={onGoingTodos[Id].title}
        priority={onGoingTodos[Id].priority}
        description={onGoingTodos[Id].description}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleIsDone={() => setDone(onGoingTodos[Id].id)}
      />
      <Modal
        title="Edit task"
        centered
        footer={null}
        open={modalopen}
        onCancel={ClsoeModal}
      >
        <hr className="mb-4" />
        <FormComponent
          isEdit
          closeModal={ClsoeModal}
          onFinish={onFinish}
          titleValue={onGoingTodos[Id].title}
          descriptionValue={onGoingTodos[Id].description}
          memoValue={onGoingTodos[Id].memo}
          priorityValue={onGoingTodos[Id].priority}
        />
      </Modal>
    </div>
  );
};

export default EditForm;
