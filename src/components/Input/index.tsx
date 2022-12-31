import React from 'react';
import './styles.scss';

type Props = {
  label: string;
  height: 'md' | 'lg';
  placeholder: string;
  onChange: () => void;
  defaultValue?: string;
};

const Input = ({
  label,
  height,
  onChange,
  placeholder,
  defaultValue,
}: Props) => {
  return (
    <div>
      {height == 'md' ? (
        <div className="input-container relative">
          <label className="label absolute top-[-10px] left-[10px]">
            {label}
          </label>
          <input
            className="input"
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            defaultValue={defaultValue}
            style={{ height: height === 'md' ? '50px' : '120px' }}
          />
        </div>
      ) : (
        <div className="input-container relative">
          <label className="label absolute top-[-10px] left-[10px]">
            {label}
          </label>
          <textarea
            className="input"
            rows={4}
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
      )}
    </div>
  );
};

Input.defaultProps = { defaultValue: '' };

export default Input;
