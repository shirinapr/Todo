import React from 'react';
import { Button } from 'antd';

type Props = {
  content: string;
  danger?: boolean;
  className?: string;
  onClick?: () => void;
  shape?: 'circle' | 'round' | 'default';
  htmlType?: 'button' | 'submit' | 'reset';
  type?:
    | 'link'
    | 'text'
    | 'ghost'
    | 'default'
    | 'primary'
    | 'dashed'
    | undefined;
};
const ButtonComponent = ({
  type,
  shape,
  danger,
  content,
  htmlType,
  className,
  onClick,
}: Props) => {
  return (
    <Button
      type={type}
      shape={shape}
      danger={danger}
      onClick={onClick}
      className={className}
      htmlType={htmlType}
    >
      {content}
    </Button>
  );
};
ButtonComponent.defaultProps = {
  danger: false,
  className: '',
  type: 'primary',
  shape: 'default',
  htmlType: 'button',
  onClick: () => {},
};

export default ButtonComponent;
