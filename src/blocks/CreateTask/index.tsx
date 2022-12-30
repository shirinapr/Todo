import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import ModalContent from '../../components/ModalContent/Form';

const CreateTaks = () => {
  const [modalopen, setModalopen] = useState(false);

  const ClsoeModal = () => {
    setModalopen(false);
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
        <ModalContent closeModal={ClsoeModal} />
      </Modal>
    </div>
  );
};

export default CreateTaks;
