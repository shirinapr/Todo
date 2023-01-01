import React from 'react';
import Primary from './models/primary';
import Secondary from './models/secondary';

type Props = {
  type: 'primary' | 'secondary';
  id: string;
  title: string;
  priority: string;
  description: string;
  hasButtons?: boolean;
  onClick?: () => void;
  handleEdit: () => void;
  handleIsDone: () => void;
  handleDelete?: () => void;
};
const Item = ({
  type,
  id,
  title,
  onClick,
  priority,
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
  onClick: () => {},
  handleDelete: () => {},
};
export default Item;
