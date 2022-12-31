import React from 'react';

import { Modal } from 'antd';

import DoneTasksContent from './contents/DoneTasks';

type Props = {
  openModal: boolean;
  closeModal: () => void;
};
const DoneTasks = ({ openModal, closeModal }: Props) => {
  return (
    <Modal
      title="Done tasks"
      centered
      open={openModal}
      onCancel={closeModal}
      footer={null}
      bodyStyle={{
        height: '400px',
        overflow: 'auto',
      }}
    >
      <hr className="mb-4" />
      <DoneTasksContent />
    </Modal>
  );
};

export default DoneTasks;
