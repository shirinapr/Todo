import React from 'react';
import './styles.scss';
import { Button } from 'antd';
type Props = {
  title: string;
  description: string;
  priority: string;
};
const Item = ({ title, description, priority }: Props) => {
  return (
    <div className="center my-4">
      <div className="container flex justify-between items-center">
        <div>
          <p className="title">{title}</p>
          <p className="description my-2">{description}</p>
        </div>
        <div>
          <p className="Priority">
            {priority}
            <span className="circle center">sd</span>
          </p>
          <div className="my-2 gap-1">
            <span>
              <Button
                type="primary"
                className="bg-green-700 hover:bg-green-800"
              >
                DONE TASK
              </Button>
            </span>
            <span>
              {' '}
              <Button
                type="primary"
                className="bg-blue-500 hover:bg-blue-600"
              >
                EDIT TASK
              </Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
