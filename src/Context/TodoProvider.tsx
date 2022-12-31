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
}>({
  todoList: [],
  addTodo: () => {},
  removeTodo: () => {},
  setDone: () => {},
});

const TodoProvider = ({ children }: any) => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const addTodo = (newItem: ITodo) => {
    setTodoList([...todoList, newItem]);
  };

  const removeTodo = (id: string) => {
    const newList = [...todoList];
    const number = (todo: ITodo) => todo.id === id;
    const indexId = newList.findIndex(number);
    newList.filter((_, index: number) => index !== indexId);
    setTodoList(newList);
  };

  const setDone = (id: string) => {
    const newList = [...todoList];
    const number = (todo: ITodo) => todo.id === id;
    const indexId = newList.findIndex(number);
    newList[indexId].status = 'done';
    setTodoList(newList);
  };

  return (
    <TodoContext.Provider
      value={{ todoList, addTodo, removeTodo, setDone }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
