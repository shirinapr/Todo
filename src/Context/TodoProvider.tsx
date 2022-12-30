import { createContext, useContext, useState } from 'react';

interface ITodo {
  title: string;
  description: string;
  memo: string;
  priority: string;
}

const TodoContext = createContext<{
  todoList: ITodo[];
  addTodo: (todo: ITodo) => void;
  removeTodo: (todo: number) => void;
}>({
  todoList: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodoProvider = ({ children }: any) => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const addTodo = (newItem: ITodo) => {
    setTodoList([...todoList, newItem]);
  };

  const removeTodo = (todoIndex: number) => {
    const newList = todoList.filter(
      (_, index: number) => index !== todoIndex,
    );

    setTodoList(newList);
  };

  return (
    <TodoContext.Provider value={{ todoList, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
