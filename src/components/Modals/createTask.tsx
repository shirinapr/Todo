import React from 'react';

import { Modal } from 'antd';

import Form from './contents/Form';
import { ITodo } from '../../Context/TodoProvider';

type Props = {
  openModal: boolean;
  closeModal: () => void;
  onFinish: (values: ITodo) => void;
};

const CreateTask = ({ openModal, closeModal, onFinish }: Props) => {
  return (
    <Modal
      title="CREATE NEW TASK"
      centered
      footer={null}
      open={openModal}
      onCancel={closeModal}
    >
      <hr className="mb-4" />
      <Form closeModal={closeModal} onFinish={onFinish} />
    </Modal>
  );
};

export default CreateTask;
