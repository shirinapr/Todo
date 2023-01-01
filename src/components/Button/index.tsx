import React from 'react';
import { Button } from 'antd';

type Props = {
  content: string;
  className: string;
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
    | any;
};
const ButtonComponent = ({
  type,
  shape,
  content,
  htmlType,
  className,
  onClick,
}: Props) => {
  return (
    <Button
      type={type}
      shape={shape}
      onClick={onClick}
      className={className}
      htmlType={htmlType}
    >
      {content}
    </Button>
  );
};
ButtonComponent.defaultProps = {
  type: 'primary',
  shape: 'default',
  htmlType: 'button',
  onClick: () => {},
};

export default ButtonComponent;
