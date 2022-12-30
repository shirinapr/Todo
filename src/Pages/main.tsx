import React, { useState } from 'react';

import { nanoid } from 'nanoid';
import { Button, Modal } from 'antd';
import Item from '../components/Item';
import { useTodoContext } from '../Context/TodoProvider';
import ModalContent from '../components/ModalContent/Form';
import CreateTask from '../blocks/CreateTask';
import Header from '../components/Header';

const Main = () => {
  const { todoList, setDone } = useTodoContext();
  const [modalopen, setModalopen] = useState(false);

  const ClsoeModal = () => {
    setModalopen(false);
  };

  const onGoingTodos = todoList.filter(
    (todo) => todo.status === 'ongoing',
  );

  return (
    <>
      <Header />
      {onGoingTodos.length ? (
        <>
          {onGoingTodos.map((todo, i) => (
            <div key={i}>
              <Item
                id={nanoid()}
                title={todo.title}
                priority={todo.priority}
                description={todo.description}
                handleIsDone={() => setDone(todo.id)}
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
            </div>
          ))}
        </>
      ) : (
        <CreateTask />
      )}
    </>
  );
};

export default Main;
