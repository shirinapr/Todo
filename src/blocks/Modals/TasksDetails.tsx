import React from 'react';

import { Modal } from 'antd';

import EditForm from '../../components/contents/EditForm';

type Props = {
  currentId: string;
  openModal: boolean;
  closeModal: () => void;
};

const TasksDetails = ({
  currentId,
  openModal,
  closeModal,
}: Props) => {
  return (
    <Modal
      title="Task Details"
      centered
      footer={null}
      open={openModal}
      onCancel={closeModal}
    >
      <hr className="mb-4" />
      <EditForm
        currentId={currentId}
        closeDetailsModal={closeModal}
      />
    </Modal>
  );
};

export default TasksDetails;
