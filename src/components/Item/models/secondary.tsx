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
        <div className="inline-flex">
          <p>Title: {todo?.title}</p> (<p>{todo?.priority}</p>)
        </div>
        <p>Description:</p>
        <p>{todo?.description}</p>
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
