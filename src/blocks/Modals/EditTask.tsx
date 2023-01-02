import React from 'react';
import { Modal } from 'antd';

import { ITodo } from '../../Context/TodoProvider';
import FormComponent from '../../components/contents/Form';

type Props = {
  todo: ITodo;
  openModal: boolean;
  closeModal: () => void;
  onFinish: (values: ITodo) => void;
};
const EditTask = ({
  openModal,
  closeModal,
  onFinish,
  todo,
}: Props) => {
  return (
    <Modal
      title="Edit task"
      centered
      footer={null}
      open={openModal}
      onCancel={closeModal}
    >
      <hr className="mb-4" />
      <FormComponent
        isEdit
        closeModal={closeModal}
        onFinish={onFinish}
        todo={todo}
      />
    </Modal>
  );
};

export default EditTask;
