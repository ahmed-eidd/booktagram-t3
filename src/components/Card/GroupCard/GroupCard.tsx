import React from 'react';

import classes from './GroupCard.module.scss';
import Background from '../../../assests/news/Background.jpg';
import ProfileImg from '../../../assests/news/test.png';
import Link from 'next/link';
import Image from 'next/image';

const GroupCard = () => {
  return (
    <div className={classes.GroupCard}>
      <Link href='/clubs/randomid'>
        <a className={classes.Link}></a>
      </Link>
      <div className={classes.ImgContainer}>
        <div className={classes.BgImg}>
          <Image src={Background} alt='logo' />
        </div>

        <div className={classes.ImgCircle}>
          <Image src={ProfileImg} alt='profile img' />
        </div>
      </div>
      <h3 className={classes.Title}>Loerm Ipsum Book Club</h3>
      <p className={classes.description}>
        Excepteur sint occaecat cupidatat non sint proidenm sunt in culpa qui
        officia indese norunt mollit aim id est sint laborum sunt in culpa qui
        officia indese norunt ml aim id est sint laborum.
      </p>
      <div className={classes.IconsContainer}>
        <div>
          <i className='fas fa-users'></i> 888 members
        </div>
        <div>
          <i className='fas fa-map-marker-alt'></i>6 October, Giza
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
