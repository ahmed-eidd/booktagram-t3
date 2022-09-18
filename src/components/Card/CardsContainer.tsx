import React from 'react';
import classes from './Card.module.scss';

interface CardContainerProps {
  children?: React.ReactNode;
}

const CardsContainer: React.FC<CardContainerProps> = ({ children }) => {
  return <div className={classes.CardsContainer}>{children}</div>;
};

export default CardsContainer;
