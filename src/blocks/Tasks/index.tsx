import React, { useState } from 'react';

import { nanoid } from 'nanoid';
import { Button, Modal } from 'antd';
import Item from '../../components/Item';
import { useTodoContext } from '../../Context/TodoProvider';
import ModalContent from '../../components/ModalContent/Form';
import EditForm from '../../components/ModalContent/EditForm';

const Tasks = () => {
  const { todoList, setDone } = useTodoContext();
  const [modalopen, setModalopen] = useState(false);
  const [modal2open, setModal2open] = useState(false);

  const ClsoeModal = () => {
    setModalopen(false);
    setModal2open(false);
  };

  const onGoingTodos = todoList.filter(
    (todo) => todo.status === 'ongoing',
  );

  return (
    <>
      {onGoingTodos.map((todo, i) => (
        <div key={i}>
          <Item
            id={nanoid()}
            title={todo.title}
            priority={todo.priority}
            description={todo.description}
            handleIsDone={() => setDone(todo.id)}
            onClick={() => setModal2open(true)}
          />
          <Button
            type="primary"
            className="bg-blue-600 absolute bottom-4 right-4"
            shape="circle"
            onClick={() => setModalopen(true)}
          >
            +
          </Button>
          <Modal
            title="CREATE NEW TASK"
            centered
            footer={null}
            open={modalopen}
            onCancel={ClsoeModal}
          >
            <hr className="mb-4" />
            <ModalContent closeModal={ClsoeModal} />
          </Modal>
          <Modal
            title="Task Deatails"
            centered
            footer={null}
            open={modal2open}
            onCancel={ClsoeModal}
          >
            <hr className="mb-4" />
            <EditForm />
          </Modal>
        </div>
      ))}
    </>
  );
};

export default Tasks;
