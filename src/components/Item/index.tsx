import React from 'react';
import Primary from './models/primary';
import Secondary from './models/secondary';

type Props = {
  id: string;
  title: string;
  priority: string;
  minimized?: boolean;
  description: string;
  hasButtons?: boolean;
  onClick?: () => void;
  handleEdit: () => void;
  handleIsDone: () => void;
  handleDelete?: () => void;
  type: 'primary' | 'secondary';
};
const Item = ({
  type,
  id,
  title,
  onClick,
  priority,
  minimized,
  hasButtons,
  handleEdit,
  description,
  handleIsDone,
  handleDelete,
}: Props) => {
  return (
    <>
      {type === 'primary' ? (
        <Primary
          id={id}
          title={title}
          priority={priority}
          minimized={minimized}
          handleEdit={handleEdit}
          description={description}
          handleIsDone={handleIsDone}
          hasButtons={hasButtons}
          onClick={onClick}
        />
      ) : (
        <Secondary
          id={id}
          title={title}
          priority={priority}
          handleEdit={handleEdit}
          description={description}
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
