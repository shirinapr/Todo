import React from 'react';

import './styles.scss';
import Button from '../../Button';

type Props = {
  id: string;
  title: string;
  priority: string;
  description: string;
  minimized?: boolean;
  hasButtons?: boolean;
  onClick?: () => void;
  handleEdit: () => void;
  handleIsDone: () => void;
};

const Item = ({
  id,
  title,
  onClick,
  priority,
  minimized,
  hasButtons,
  handleEdit,
  description,
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
          <p className="title">{title}</p>
          <p
            className={`${
              minimized ? 'mindecription' : 'description'
            } my-2`}
          >
            {description}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="priority">
            {priority}
            <span
              className="circle center"
              style={{
                backgroundColor:
                  priority == 'medium'
                    ? 'orange'
                    : priority == 'high'
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
                  className="bg-green-700 hover:bg-green-800"
                />
              </span>
              <span>
                <Button
                  type="primary"
                  content="EDIT TASK"
                  onClick={handleEdit}
                  className="bg-blue-500 hover:bg-blue-600"
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
