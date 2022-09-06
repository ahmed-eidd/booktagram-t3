import React from 'react';
import BookShelf from '../BookShelf/BookShelf';
import classes from './Profile.module.scss';
import Avatar2 from '../../assests/avatar.jpg';
import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import GroupCard from '../Card/GroupCard/GroupCard';

interface ProfileProps {
  name: string;
  description: string;
  activity: string;
  country: string;
}

const Profile = ({ name, description, activity, country }) => {
  return (
    <div className={classes.Profile}>
      <div className={classes.Profile__Info}>
        <div className={classes.Profile__Info__Img}>
          <Image src={Avatar2} alt='profile img' />
        </div>
        <div className={classes.Profile__Info__TextContainer}>
          <Flex justify='space-between' align='center' width='100%'>
            <h3 className={classes.Profile__Info__Name}>Mattis Molestie</h3>
            <div className={classes.Profile__Info__EditBtn}>(Edit profile)</div>
          </Flex>
          <p className={classes.Profile__Info__Description}>
            Mattis Molestie hasn't added any details yet.Mattis Molestie hasn't
            added any details yet.Mattis Molestie hasn't added any details
          </p>
          <p className={classes.Profile__Info__Activity}>
            <span>Activity</span>Joined in January 2014, last active this month
          </p>
          <p className={classes.Profile__Info__Country}>Cairo, Egypt</p>
        </div>
      </div>

      <div className={classes.Profile__User__Books}>
        <h3 className={classes.Profile__User__Books__Title}>Mattis's Books</h3>
        <BookShelf />
      </div>
      <div className={classes.Profile__User__Clubs}>
        <h3 className={classes.Profile__User__Clubs__Title}>Mattis's Clubs</h3>
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
      </div>
    </div>
  );
};

export default Profile;
