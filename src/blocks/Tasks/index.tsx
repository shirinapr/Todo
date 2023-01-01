import React, { useState } from 'react';

import Button from '../../components/Button';
import CreateTask from '../Modals/CreateTask';
import Item from '../../components/Item';
import TasksDetails from '../Modals/TasksDetails';

import { nanoid } from 'nanoid';
import EditTask from '../Modals/EditTask';
import { ITodo, useTodoContext } from '../../Context/TodoProvider';

const Tasks = () => {
  const [createModal, setCreateModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
  const [editFormModal, setEditFormModal] = useState(false);

  const [currentId, setCurrentId] = useState('');

  const { todoList, setDone, addTodo, editTodo } = useTodoContext();

  const onGoingTodos = todoList.filter(
    (todo) => todo.status === 'ongoing',
  );

  const openDetailModal = (id: string) => {
    setCurrentId(id);
    setTimeout(() => {
      setDetailModal(true);
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
    setCreateModal(false);
    setDetailModal(false);
    setEditFormModal(false);
  };

  const editForm = (id: string) => {
    setCurrentId(id);
    setEditFormModal(true);
  };

  const index = todoList.findIndex((x) => x.id === currentId);

  const onFinishEdit = (values: ITodo) => {
    editTodo(todoList[index].id, values);
    setEditFormModal(false);
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
            onClick={() => openDetailModal(todo.id)}
            handleEdit={() => editForm(todo.id)}
          />
        </div>
      ))}

      <Button
        type="primary"
        className="bg-blue-600 absolute bottom-4 right-4 w-10 h-10"
        shape="circle"
        onClick={() => setCreateModal(true)}
        content="+"
      />

      <CreateTask
        openModal={createModal}
        closeModal={modalClose}
        onFinish={onFinish}
      />

      <TasksDetails
        currentId={currentId}
        openModal={detailModal}
        closeModal={modalClose}
      />

      {index !== -1 && (
        <EditTask
          onFinish={onFinishEdit}
          closeModal={modalClose}
          openModal={editFormModal}
          memo={todoList[index].memo}
          title={todoList[index].title}
          priority={todoList[index].priority}
          description={todoList[index].description}
        />
      )}
    </>
  );
};

export default Tasks;
