import React from 'react';

import { Button } from 'antd';

import './styles.scss';

type Props = {
  id: string;
  title: string;
  priority: string;
  description: string;
  onClick?: () => void;
  handleEdit: () => void;
  handleIsDone: () => void;
  handleDelete?: () => void;
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
