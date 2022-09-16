import React from 'react';
import classes from './ProfileIcon.module.scss';
import Avatar2 from '../../../assests/avatar.jpg';
import Image from 'next/image';

interface ProfileIconProps {
  name: string;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ name }) => {
  return (
    <div className={classes.ProfileIcon}>
      <div className={classes.ProfileIcon__Img}>
        <Image src={Avatar2} alt='account profile img' />
      </div>
      <p className={classes.ProfileIcon__Name}>
        {/* {profile.firstName && profile.lastName
          ? profile.firstName + ' ' + profile.lastName
          : 'John Doe'} */}
      </p>
    </div>
  );
};

export default ProfileIcon;
