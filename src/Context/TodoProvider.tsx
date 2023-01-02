import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

export interface ITodo {
  id: string;
  target: string;
  title: string;
  priority: string;
  description: string;
  status: 'done' | 'ongoing';
}

const TodoContext = createContext<{
  todoList: ITodo[];
  addTodo: (todo: ITodo) => void;
  setDone: (todo: string) => void;
  removeTodo: (todo: string) => void;
  editTodo: (id: string, todo: ITodo) => void;
}>({
  todoList: [],
  addTodo: () => {},
  setDone: () => {},
  editTodo: () => {},
  removeTodo: () => {},
});

const TodoProvider = ({ children }: { children: ReactNode }) => {
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
