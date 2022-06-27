import classNames from 'classnames';
import React, { FC } from 'react';

export interface ITextProps {
  children: React.ReactNode;
  className?: string;
}

export const Text: FC<ITextProps> = ({ children, className }) => {
  return <p className={classNames('', className)}>{children}</p>;
};
