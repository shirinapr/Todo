import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import ModalContent from '../../components/ModalContent/Form';

import { ITodo, useTodoContext } from '../../Context/TodoProvider';
import { nanoid } from 'nanoid';

const CreateTask = () => {
  const [modalopen, setModalopen] = useState(false);
  const { addTodo } = useTodoContext();

  const ClsoeModal = () => {
    setModalopen(false);
  };
  const onFinish = (values: ITodo) => {
    addTodo({
      ...values,
      status: 'ongoing',
      id: nanoid(),
    });
  };

  return (
    <div className="center h-[90vh]">
      <Button
        type="primary"
        className="bg-blue-500"
        onClick={() => setModalopen(true)}
      >
        CREATE YOUR FIRST TASK
      </Button>

      <Modal
        title="CREATE NEW TASK"
        centered
        open={modalopen}
        onCancel={ClsoeModal}
        footer={null}
      >
        <hr className="mb-4" />
        <ModalContent closeModal={ClsoeModal} onFinish={onFinish} />
      </Modal>
    </div>
  );
};

export default CreateTask;
