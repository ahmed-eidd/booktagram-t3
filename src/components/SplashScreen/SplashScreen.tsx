import { useStore } from '@/store';
import { motion } from 'framer-motion';
import React from 'react';

const SplashScreen = () => {
  const isLoading = useStore((state) => state.loading);
  return (
    <motion.div
      animate={{ visibility: isLoading ? 'visible' : 'hidden', zIndex: '1000' }}
      className='container'
    >
      <div className='book'>
        <div className='inner'>
          <div className='left' />
          <div className='middle' />
          <div className='right' />
        </div>
        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
