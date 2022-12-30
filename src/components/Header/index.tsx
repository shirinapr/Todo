import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import DoneTasks from '../ModalContent/DoneTasks';

const Header = () => {
  const [modalopen, setModalopen] = useState(false);

  const ClsoeModal = () => {
    setModalopen(false);
  };

  return (
    <div className="center py-4 shadow-md">
      <Button
        type="primary"
        onClick={() => setModalopen(true)}
        className="bg-green-700 hover:bg-green-800 absolute lg:left-[150px] left-3 lg:w-[170px] w-[110px] text-[12px] lg:text-base center"
      >
        VIEW DONE TASKS
      </Button>
      <Modal
        title="CREATE NEW TASK"
        centered
        open={modalopen}
        onCancel={ClsoeModal}
        footer={null}
      >
        <hr className="mb-4" />
        <DoneTasks />
      </Modal>
      <p className="lg:text-2xl text-lg">Todo App</p>
    </div>
  );
};

export default Header;
