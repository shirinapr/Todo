import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Input from '../../components/Input';

const CreateTaks = () => {
  const [modalopen, setModalopen] = useState(false);
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
        onOk={() => setModalopen(false)}
        onCancel={() => setModalopen(false)}
      >
        <hr />
        <Input
          placeholder={'placeholer'}
          onChange={() => console.log('h')}
          label={'label'}
          height="md"
        />
        <Input
          placeholder={'placeholer'}
          onChange={() => console.log('h')}
          label={'label'}
          height="lg"
        />
        <p>sdasd</p>
      </Modal>
    </div>
  );
};

export default CreateTaks;
