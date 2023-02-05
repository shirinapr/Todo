import React from 'react';

import { Button } from 'antd';

import './styles.scss';
import { ITodo } from '../../../Context/TodoProvider';

type Props = {
  todo: ITodo;
  onClick?: () => void;
  handleEdit: () => void;
  handleIsDone: () => void;
  handleDelete?: () => void;
};

const Item = ({
  todo,
  onClick,
  handleEdit,
  handleIsDone,
  handleDelete,
}: Props) => {
  return (
    <div className="my-4" onClick={onClick}>
      <div>
        <div className="inline-flex gap-1 items-center">
          <p className="text-base">Title: </p>
          {todo?.title}
          <p className="font-bold">({todo?.priority})</p>
        </div>
        <p className="text-base">Description:</p>
        <p className="text-gray-500">{todo?.description}</p>
        <div className="flex justify-between items-center mt-2 gap-1">
          <span>
            <Button
              type="primary"
              onClick={handleEdit}
              className="bg-blue-500 hover:bg-blue-600 w-[90px] "
            >
              EDIT
            </Button>
          </span>
          <span>
            <Button
              type="primary"
              className="bg-green-700 hover:bg-green-800 w-[90px]"
              onClick={handleIsDone}
            >
              DONE
            </Button>
          </span>
          <span>
            <Button
              type="primary"
              className="bg-red-500 hover:bg-red-600 w-[90px]"
              onClick={handleDelete}
            >
              DELETE
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};
Item.defaultProps = { onClick: () => {}, handleDelete: () => {} };

export default Item;
