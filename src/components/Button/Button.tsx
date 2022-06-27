import React, { FC } from 'react';
import classNames from 'classnames';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button: FC<IButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={classNames(
        'px-4 py-2 rounded text-white bg-ankr-blue',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
