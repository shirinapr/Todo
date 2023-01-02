import React from 'react';
import Primary from './models/primary';
import Secondary from './models/secondary';
import { ITodo } from '../../Context/TodoProvider';

type Props = {
  todo: ITodo;
  minimized?: boolean;
  hasButtons?: boolean;
  onClick?: () => void;
  handleEdit: () => void;
  handleIsDone: () => void;
  handleDelete?: () => void;
  type: 'primary' | 'secondary';
};
const Item = ({
  type,
  todo,
  onClick,
  minimized,
  hasButtons,
  handleEdit,
  handleIsDone,
  handleDelete,
}: Props) => {
  return (
    <>
      {type === 'primary' ? (
        <Primary
          todo={todo}
          minimized={minimized}
          handleEdit={handleEdit}
          handleIsDone={handleIsDone}
          hasButtons={hasButtons}
          onClick={onClick}
        />
      ) : (
        <Secondary
          todo={todo}
          handleEdit={handleEdit}
          handleIsDone={handleIsDone}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

Item.defaultProps = {
  hasButtons: true,
  minimized: false,
  onClick: () => {},
  handleDelete: () => {},
};
export default Item;
