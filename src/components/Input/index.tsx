import React from 'react';
import './styles.scss';

type Props = {
  label: string;
  placeholder: string;
  onChange: () => void;
  height: 'md' | 'lg';
};

const Input = ({ placeholder, onChange, label, height }: Props) => {
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
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
