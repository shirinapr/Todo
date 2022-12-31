import React from 'react';
import './styles.scss';
import Button from '../Button';

type Props = {
  id: string;
  title: string;
  priority: string;
  description: string;
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
  hasButtons,
  handleEdit,
  description,
  handleIsDone,
}: Props) => {
  return (
    <div onClick={onClick} className="center my-4 lg:mx-20 mx-5">
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
                  content="DONE TASK"
                  onClick={handleIsDone}
                  className="bg-green-700 hover:bg-green-800 mx-1"
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
Item.defaultProps = { hasButtons: true, onClick: () => {} };

export default Item;
