import classNames from 'classnames';
import React from 'react';
import { FC } from 'react';

export interface IHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: React.ReactNode;
}

export const Heading: FC<IHeadingProps> = ({
  variant = 'h3',
  className,
  children,
  ...props
}) => {
  if (variant === 'h1') {
    return (
      <h1 className={classNames('text-5xl font-bold', className)} {...props}>
        {children}
      </h1>
    );
  }

  if (variant === 'h2') {
    return (
      <h2 className={classNames('text-4xl font-bold', className)} {...props}>
        {children}
      </h2>
    );
  }

  if (variant === 'h3') {
    return (
      <h3 className={classNames('text-3xl font-bold', className)} {...props}>
        {children}
      </h3>
    );
  }

  if (variant === 'h4') {
    return (
      <h4 className={classNames('text-2xl font-bold', className)} {...props}>
        {children}
      </h4>
    );
  }

  if (variant === 'h5') {
    return (
      <h5 className={classNames('text-xl font-bold', className)} {...props}>
        {children}
      </h5>
    );
  }

  if (variant === 'h6') {
    return (
      <h6 className={classNames('text-lg font-bold', className)} {...props}>
        {children}
      </h6>
    );
  }

  return (
    <h3 className={classNames('text-lg font-bold', className)} {...props}>
      {children}
    </h3>
  );
};
