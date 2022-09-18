import { Stack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import classes from './Event.module.scss';

interface EventProps {
  day?: number;
  month?: string;
  time?: number;
  title?: string;
  description?: string;
  location?: string;
  id?: number | string;
  speakers: string;
}

const Event: React.FC<EventProps> = ({
  day,
  month,
  time,
  title,
  description,
  location,
  speakers,
  id = 'ss',
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
          <span>Location:</span>
          {location || 'Cairo, Egypt'}
        </p>
        <p className={classes.Event__Text}>
          <span>Time:</span>
          {time || '12:45'}
        </p>
        <p className={classes.Event__Text}>
          <span>Speakers:</span>
          {speakers}
        </p>
      </div>
      {/* <Link href={`/event/${id}`}>
        <a className={classes.Event__LearnMore}>Learn More</a>
      </Link> */}
      <Link href={`events/${id}`}>
        <a className={classes.Event__Link}></a>
      </Link>
    </div>
  );
};

export default Event;
