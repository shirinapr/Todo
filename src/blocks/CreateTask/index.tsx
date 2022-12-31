import React, { useState } from 'react';

import Button from '../../components/Button';
import CreateTaskModal from '../../components/Modals/createTask';

import { nanoid } from 'nanoid';
import { ITodo, useTodoContext } from '../../Context/TodoProvider';

const CreateTask = () => {
  const [modalopen, setModalopen] = useState(false);
  const { addTodo } = useTodoContext();

  const ClsoeModal = () => {
    setModalopen(false);
  };

  const onFinish = (values: ITodo) => {
    addTodo({
      ...values,
      id: nanoid(),
      status: 'ongoing',
    });
  };

  return (
    <div className="center h-[90vh]">
      <Button
        type="primary"
        className="bg-blue-500"
        content="CREATE YOUR FIRST TASK"
        onClick={() => setModalopen(true)}
      />

      <CreateTaskModal
        onFinish={onFinish}
        openModal={modalopen}
        closeModal={ClsoeModal}
      />
    </div>
  );
};

export default CreateTask;
