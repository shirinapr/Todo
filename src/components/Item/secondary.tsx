import React from 'react';
import './styles.scss';
import { Button } from 'antd';

type Props = {
  id: string;
  title: string;
  priority: string;
  description: string;
  onClick?: () => void;
  handleIsDone: () => void;
  handleDelete: () => void;
  handleEdit: () => void;
};

const Item = ({
  id,
  title,
  onClick,
  priority,
  description,
  handleIsDone,
  handleDelete,
  handleEdit,
}: Props) => {
  return (
    <div className="my-4" onClick={onClick}>
      <div>
        <div className="inline-flex">
          <p>Title: {title}</p> (<p>{priority}</p>)
        </div>
        <p>Description:</p>
        <p>{description}</p>
        <div className="flex justify-between items-center mt-2">
          <span>
            <Button
              type="primary"
              onClick={handleEdit}
              className="bg-blue-500 hover:bg-blue-600"
            >
              EDIT TASK
            </Button>
          </span>
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
              className="bg-red-500 hover:bg-red-600"
              onClick={handleDelete}
            >
              DELETE TASK
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};
Item.defaultProps = { onClick: () => {} };

export default Item;
