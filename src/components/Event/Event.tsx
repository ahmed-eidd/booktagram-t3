import { Divider, Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import classes from './Event.module.scss';

interface EventProps {
  day: string;
  month: string;
  date: string;
  title: string;
  description?: string;
  location: string;
  children: React.ReactNode;
}

const Event: React.FC<EventProps> = ({
  day,
  month,
  date,
  title,
  description,
  location,
  children,
}) => {
  return (
    <div className={classes.Event}>
      <Stack direction='column' justify='center' align='center' spacing={1}>
        <p className={classes.Event__Day}>{day || '16'}</p>
        <p className={classes.Event__Month}>{month || 'Jun'}</p>
        <i className={`${classes.Event__CalendarIcon} far fa-calendar-alt`}></i>
      </Stack>
      <div className={classes.Divider}></div>
      <div className={classes.Event__TextContainer}>
        <h4 className={classes.Event__Title}>{title || 'Event Title'}</h4>
        <p className={classes.Event__Text}>
          <span>Location:</span>[ location || Cairo, Egypt ]
        </p>
        <p className={classes.Event__Text}>
          <span>Time:</span>
          {date || '12:45'}
        </p>
        <p className={classes.Event__Text}>
          <span>Speakers:</span>
          Random Name
        </p>
      </div>
      {children}
    </div>
  );
};

export default Event;
