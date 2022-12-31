import React, { useState } from 'react';
import Item from '../Item/secondary';
import { ITodo, useTodoContext } from '../../Context/TodoProvider';
import { nanoid } from 'nanoid';
import { Modal } from 'antd';
import FormComponent from './Form';

const EditForm = () => {
  const { todoList, setDone, removeTodo } = useTodoContext();

  const handleEdit = () => {
    setModalopen(true);
  };

  const handleDelete = () => {
    removeTodo(todoList[0].id);
  };
  const [modalopen, setModalopen] = useState(false);

  const ClsoeModal = () => {
    setModalopen(false);
  };

  const onFinish = (values: ITodo) => {
    console.log('hey');
  };

  const onGoingTodos = todoList.filter(
    (todo) => todo.status === 'ongoing',
  );

  return (
    <div>
      <Item
        id={nanoid()}
        title={onGoingTodos[0].title}
        priority={onGoingTodos[0].priority}
        description={onGoingTodos[0].description}
        handleIsDone={() => setDone(onGoingTodos[0].id)}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <Modal
        title="CREATE NEW TASK"
        centered
        footer={null}
        open={modalopen}
        onCancel={ClsoeModal}
      >
        <hr className="mb-4" />
        <FormComponent
          closeModal={ClsoeModal}
          onFinish={onFinish}
          titleValue={onGoingTodos[0].title}
          descriptionValue={onGoingTodos[0].description}
          memoValue={onGoingTodos[0].memo}
          priorityValue={onGoingTodos[0].priority}
        />
      </Modal>
    </div>
  );
};

export default EditForm;
