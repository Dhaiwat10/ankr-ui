import classNames from 'classnames';
import React, { FC } from 'react';

export interface ITextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

export const Text: FC<ITextProps> = ({ children, className, ...props }) => {
  return (
    <p className={classNames('', className)} {...props}>
      {children}
    </p>
  );
};
