import React, { useState } from 'react';

import { nanoid } from 'nanoid';
import { Button, Modal } from 'antd';
import Item from '../../components/Item';
import { useTodoContext } from '../../Context/TodoProvider';
import ModalContent from '../../components/ModalContent/Form';

const Tasks = () => {
  const { todoList, setDone } = useTodoContext();
  const [modalopen, setModalopen] = useState(false);

  const ClsoeModal = () => {
    setModalopen(false);
  };

  return (
    <div>
      {todoList
        .filter((todo) => todo.status === 'ongoing')
        .map((todo, i) => (
          <div key={i}>
            <Item
              id={nanoid()}
              title={todo.title}
              priority={todo.priority}
              description={todo.description}
              handleIsDone={() => setDone(todo.id)}
            />
          </div>
        ))}
      <Button
        type="primary"
        shape="circle"
        onClick={() => setModalopen(true)}
      >
        +
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

export default Tasks;
