import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Form from './Form';

const CreateTaks = () => {
  const [modalopen, setModalopen] = useState(false);

  const ClsoeModal = () => {
    setModalopen(false);
  };

  return (
    <div className="center h-[92vh]">
      <Button
        type="primary"
        className="bg-blue-500         
"
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
        <Form closeModal={ClsoeModal} />
      </Modal>
    </div>
  );
};

export default CreateTaks;
