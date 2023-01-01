import React, { useState } from 'react';

import Button from '../../components/Button';
import CreateTask from '../Modals/CreateTask';
import Item from '../../components/Item';
import TasksDetails from '../Modals/TasksDetails';

import { nanoid } from 'nanoid';
import { ITodo, useTodoContext } from '../../Context/TodoProvider';

const Tasks = () => {
  const [modalopen, setModalopen] = useState(false);
  const [modal2open, setModal2open] = useState(false);
  const [currentId, setCurrentId] = useState('');

  const { todoList, setDone, addTodo } = useTodoContext();

  const onGoingTodos = todoList.filter(
    (todo) => todo.status === 'ongoing',
  );

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

  const modalClose = () => {
    setModalopen(false);
    setModal2open(false);
  };

  return (
    <>
      {onGoingTodos.map((todo, i) => (
        <div key={i}>
          <Item
            type="primary"
            id={todo.id}
            title={todo.title}
            priority={todo.priority}
            description={todo.description}
            handleIsDone={() => setDone(todo.id)}
            onClick={() => openEditModal(todo.id)}
            handleEdit={() => openEditModal(todo.id)}
          />
        </div>
      ))}

      <Button
        type="primary"
        className="bg-blue-600 absolute bottom-4 right-4 w-10 h-10"
        shape="circle"
        onClick={() => setModalopen(true)}
        content="+"
      />

      <CreateTask
        openModal={modalopen}
        closeModal={modalClose}
        onFinish={onFinish}
      />

      <TasksDetails
        currentId={currentId}
        openModal={modal2open}
        closeModal={modalClose}
      />
    </>
  );
};

export default Tasks;
