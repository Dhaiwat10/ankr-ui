import React, { FC } from 'react';
import classNames from 'classnames';

export interface IButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Button: FC<IButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'px-4 py-2 rounded text-white bg-ankr-blue',
        className
      )}
    >
      {children}
    </button>
  );
};
