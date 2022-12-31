import { createContext, useContext, useState } from 'react';

export interface ITodo {
  id: string;
  title: string;
  description: string;
  memo: string;
  priority: string;
  status: 'done' | 'ongoing';
}

const TodoContext = createContext<{
  todoList: ITodo[];
  addTodo: (todo: ITodo) => void;
  removeTodo: (todo: string) => void;
  setDone: (todo: string) => void;
  editTodo: (id: string, todo: ITodo) => void;
}>({
  todoList: [],
  addTodo: () => {},
  removeTodo: () => {},
  setDone: () => {},
  editTodo: () => {},
});

const TodoProvider = ({ children }: any) => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const addTodo = (newItem: ITodo) => {
    setTodoList([...todoList, newItem]);
  };

  const removeTodo = (id: string) => {
    const newList = [...todoList];
    const indexId = newList.findIndex((x) => x.id === id);
    const filteredList = newList.filter(
      (_, index: number) => index !== indexId,
    );
    setTodoList(filteredList);
  };

  const setDone = (id: string) => {
    const newList = [...todoList];
    const indexId = newList.findIndex((x) => x.id === id);
    newList[indexId].status = 'done';
    setTodoList(newList);
  };

  const editTodo = (id: string, newValues: ITodo) => {
    const newList = [...todoList];
    const indexId = newList.findIndex((x) => x.id === id);
    newList[indexId] = {
      ...newValues,
      id,
      status: newList[indexId].status,
    };
    setTodoList(newList);
  };

  return (
    <TodoContext.Provider
      value={{ todoList, addTodo, removeTodo, setDone, editTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
