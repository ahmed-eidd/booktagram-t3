import React from 'react';
import classes from './CardPage.module.scss';
import Img from '../../assests/news/Background.jpg';
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Tabs from '../Tabs/Tabs';
import Image from 'next/image';
import { useRouter } from 'next/router';

const CardPage = () => {
  const router = useRouter();
  const backBtnHandler = () => {
    router.back();
  };

  return (
    <div className={classes.CardPage}>
      <p className={classes.BackBtn}>
        <i className='fas fa-angle-left'></i>
        <span onClick={backBtnHandler}>Back</span> to search Results
      </p>
      <div className={classes.MainSection}>
        <div className={classes.ImgContainer}>
          <Image src={Img} alt='card logo' />
        </div>
        <div className={classes.TextContainer}>
          <h3>Title</h3>
          <div className={classes.TextInfo}>
            <h5>
              <i className='fas fa-clock' style={{ marginRight: '.3rem' }}></i>{' '}
              Date
            </h5>
            <p>Thu, Mar 11, 2021 5:00 PM – 6:00 PM</p>
          </div>
          <div className={classes.TextInfo}>
            <h5>
              <i className='fas fa-map-marker-alt'></i>Location
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>
          <div className={classes.TextInfo}>
            <h5>
              <i className='fas fa-link'></i>Online Links
            </h5>
            <div>
              <i className='fab fa-youtube'></i>{' '}
              <i className='fas fa-video'></i>
            </div>
          </div>
        </div>
      </div>
      <Tabs tabs={['Speakers', 'Details', 'Orgnaizer']} />
    </div>
  );
};

export default CardPage;
