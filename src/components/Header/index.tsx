import React from 'react';
import { Button } from 'antd';

const Header = () => {
  return (
    <div className="center py-4 shadow-md">
      <Button
        type="primary"
        className="bg-green-700 hover:bg-green-600 absolute lg:left-[150px] left-3 lg:w-[170px] w-[110px] text-[12px] lg:text-base center"
      >
        VIEW DONE TASKS
      </Button>

      <p className="lg:text-2xl text-lg">Todo App</p>
    </div>
  );
};

export default Header;
