import React from 'react';
import BookCover from '../BookCover/BookCover';
import TabPanel from '../Tabs/TabPanel/TabPanel';
import Tabs from '../Tabs/Tabs';
import cover from '../../assests/bookcover.jpg';
import { Grid } from '@chakra-ui/react';
// import classes from './BookShelf.module.scss';

const BookShelf = () => {
  const tabsTitle = ['All', 'Read', 'Currently-Reading', 'To-Read'];
  return (
    <Tabs justify='space-between' tabs={tabsTitle}>
      <TabPanel>
        <Grid >
          <BookCover cover={cover} />
          <BookCover cover={cover} />
          <BookCover cover={cover} />
          <BookCover cover={cover} />
        </Grid>
      </TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </Tabs>
  );
};

export default BookShelf;