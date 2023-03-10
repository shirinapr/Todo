import React from 'react';

import './styles.scss';
import Button from '../../Button';
import { ITodo } from '../../../Context/TodoProvider';

type Props = {
  todo: ITodo;
  minimized?: boolean;
  hasButtons?: boolean;
  onClick?: () => void;
  handleEdit: () => void;
  handleIsDone: () => void;
};

const Item = ({
  todo,
  onClick,
  minimized,
  hasButtons,
  handleEdit,
  handleIsDone,
}: Props) => {
  return (
    <div
      className={`${
        minimized ? 'mx-4' : 'lg:mx-[150px] mx-5'
      } center my-4 cursor-pointer`}
    >
      <div className="container flex justify-between items-center">
        <div onClick={onClick}>
          <p className="title">{todo?.title}</p>
          <p
            className={`${
              minimized ? 'mindecription' : 'description'
            } my-2`}
          >
            {todo?.description}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="priority">
            {todo?.priority}
            <span
              className="circle center"
              style={{
                backgroundColor:
                  todo?.priority == 'medium'
                    ? 'orange'
                    : todo?.priority == 'high'
                    ? 'red'
                    : 'green',
              }}
            />
          </p>
          {hasButtons && (
            <div className="py-2 flex lg:gap-2 gap-1">
              <span>
                <Button
                  type="primary"
                  content="DONE TASK"
                  onClick={handleIsDone}
                  className="bg-green-700 hover:bg-green-800 lg:w-[100px] w-[80px] center"
                />
              </span>
              <span>
                <Button
                  type="primary"
                  content="EDIT TASK"
                  onClick={handleEdit}
                  className="bg-blue-500 hover:bg-blue-600 lg:w-[100px] w-[80px] center"
                />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
Item.defaultProps = {
  hasButtons: true,
  onClick: () => {},
  minimized: false,
};

export default Item;
