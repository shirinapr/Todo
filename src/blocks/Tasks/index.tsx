import React, { useState } from 'react';

import { nanoid } from 'nanoid';
import { Button, Modal } from 'antd';
import Item from '../../components/Item';
import { ITodo, useTodoContext } from '../../Context/TodoProvider';
import Form from '../../components/ModalContent/Form';
import EditForm from '../../components/ModalContent/EditForm';

const Tasks = () => {
  const { todoList, setDone, addTodo } = useTodoContext();
  const [modalopen, setModalopen] = useState(false);
  const [modal2open, setModal2open] = useState(false);
  const [currentId, setCurrentId] = useState('');

  const ClsoeModal = () => {
    setModalopen(false);
    setModal2open(false);
  };

  const openEditModal = (id: string) => {
    setCurrentId(id);
    setTimeout(() => {
      setModal2open(true);
    }, 50);
  };
  const onFinish = (values: ITodo) => {
    addTodo({
      ...values,
      status: 'ongoing',
      id: nanoid(),
    });
  };

  const onGoingTodos = todoList.filter(
    (todo) => todo.status === 'ongoing',
  );

  return (
    <>
      {onGoingTodos.map((todo, i) => (
        <div key={i}>
          <Item
            id={todo.id}
            title={todo.title}
            priority={todo.priority}
            description={todo.description}
            handleIsDone={() => setDone(todo.id)}
            onClick={() => openEditModal(todo.id)}
          />
        </div>
      ))}
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
        <Form closeModal={ClsoeModal} onFinish={onFinish} />
      </Modal>
      <Modal
        title="Task Details"
        centered
        footer={null}
        open={modal2open}
        onCancel={ClsoeModal}
      >
        <hr className="mb-4" />
        <EditForm currentId={currentId} />
      </Modal>
    </>
  );
};

export default Tasks;
