import React from 'react';
import './styles.scss';
import { Button } from 'antd';

type Props = {
  id: string;
  title: string;
  priority: string;
  description: string;
  hasButtons?: boolean;
  onClick?: () => void;
  handleIsDone: () => void;
};

const Item = ({
  id,
  title,
  onClick,
  priority,
  hasButtons,
  description,
  handleIsDone,
}: Props) => {
  return (
    <div
      className="center my-4"
      onClick={onClick}
      style={{ cursor: onClick && 'pointer' }}
    >
      <div className="container flex justify-between items-center">
        <div>
          <p className="title">{title}</p>
          <p className="description my-2">{description}</p>
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
            <div className="py-2">
              <span>
                <Button
                  type="primary"
                  className="bg-green-700 hover:bg-green-800 mx-1"
                  onClick={handleIsDone}
                >
                  DONE TASK
                </Button>
              </span>
              <span>
                <Button
                  type="primary"
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  EDIT TASK
                </Button>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
Item.defaultProps = { hasButtons: true, onClick: () => {} };

export default Item;
