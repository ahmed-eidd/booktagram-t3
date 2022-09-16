import React from 'react';
import Link from 'next/link';
import { extendClasses } from '../../utilities/extendClasses';
import classes from './Button.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'link' | 'underline';
  to?: string;
  isLoading?: boolean;
  variant?: 'filled' | 'outline';
  onClick?: () => void;
  style?: object;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  to = '',
  isLoading,
  variant = 'filled',
  onClick,
  style,
  className,
}) => {
  // css classes
  // extendClasses(classes.btn, [classes.outline, className]);
  // extendClasses(classes.btn, [classes.filled, className]);
  const btnClass =
    variant === 'outline'
      ? extendClasses(classes.btn, [classes.outline, className])
      : extendClasses(classes.btn, [classes.filled, className]);

  return (
    <>
      {/* If Button is a Link */}

      {type === 'link' && (
        <Link href={to} className={btnClass} onClick={onClick} style={style}>
          <a>
            {isLoading ? (
              <div className={classes.loader}>Loading...</div>
            ) : (
              children
            )}
          </a>
        </Link>
      )}

      {/* if Button is an anchor */}

      {type === 'button' && (
        <button
          onClick={onClick}
          style={style}
          className={btnClass}
          type={type}
        >
          {isLoading ? (
            <div className={classes.loader}>Loading...</div>
          ) : (
            children
          )}
        </button>
      )}

      {type === 'submit' && (
        <button
          onClick={onClick}
          style={style}
          className={btnClass}
          type={type}
        >
          {isLoading ? (
            <div className={classes.loader}>Loading...</div>
          ) : (
            children
          )}
        </button>
      )}
      {type === 'underline' && (
        <div
          className={extendClasses(classes.underline, className)}
          onClick={onClick}
          style={style}
        >
          <i
            style={{
              marginRight: '.5rem',
            }}
            className='fas fa-plus-circle'
          ></i>
          <button>{children}</button>
        </div>
      )}
    </>
  );
};

export default Button;
