import React from 'react';
import { Modal } from 'antd';

import { ITodo } from '../../Context/TodoProvider';
import FormComponent from '../../components/contents/Form';

type Props = {
  memo: string;
  title: string;
  priority: string;
  currentId?: string;
  openModal: boolean;
  description: string;
  closeModal: () => void;
  onFinish: (values: ITodo) => void;
};
const EditTask = ({
  openModal,
  closeModal,
  onFinish,
  title,
  description,
  memo,
  priority,
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
        titleValue={title}
        descriptionValue={description}
        memoValue={memo}
        priorityValue={priority}
      />
    </Modal>
  );
};

export default EditTask;
