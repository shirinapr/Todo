import { Button } from 'antd';
import React from 'react';

const Tasks = () => {
  // const { todoList } = useTodoContext();

  return (
    <div>
      {/* {todoList.map(({ todo, i }: any) => (
        <div key={i}>{todo}</div>
      ))} */}
      <Button type="primary" shape="circle">
        +
      </Button>
    </div>
  );
};

export default Tasks;
