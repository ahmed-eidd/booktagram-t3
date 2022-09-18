import React from 'react';
import classes from './Dots.module.scss';

interface DotsProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Dots: React.FC<DotsProps> = ({ className, style, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={style}
      className={[classes.Dots, className].join(' ')}
    >
      <i className='fas fa-ellipsis-h'></i>
    </div>
  );
};

export default Dots;