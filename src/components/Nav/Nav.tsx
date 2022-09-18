import React, { useEffect, useState } from 'react';
import classes from './Nav.module.scss';
import Link from 'next/link';
// import { setAuthModalOpen } from '../../storeRedux/auth/action';
// import { useDispatch } from 'react-redux';
import LoginModal from '../LoginModal/LoginModal';
import Logo from '../../assests/logo.png';
import Navitem from './NavItem/NavItem';
import NavLang from './NavLang/NavLang';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import Button from '../Button/Button';
import { useRouter } from 'next/router';
import { Flex } from '@chakra-ui/react';

// const SIGN_IN = 'signin';
// const SIGN_UP = 'signup';

const Nav = () => {
  // const dispatch = useDispatch();
  const [scrollDir, setScrollDir] = useState('scrolling up');
  const [scrolling, setScrolling] = useState(false);

  const { data } = useSession();
  const router = useRouter();
  console.log('session from nav', data);
  // const signUpOpen = () => {
  //   dispatch(setAuthModalOpen(SIGN_UP));
  // };

  // const signInOpen = () => {
  //   dispatch(setAuthModalOpen(SIGN_IN));
  // };

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? 'scrolling down' : 'scrolling up');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (window.pageYOffset === 0) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    // console.log(scrollDir);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return (
    <div
      className={
        !scrolling
          ? classes.container
          : [classes.container, classes.scroll].join(' ')
      }
      style={{
        transform:
          scrollDir === 'scrolling up' ? 'translateY(0)' : 'translateY(-100vh)',
      }}
    >
      <Link href='/' className={classes.Logo}>
        <a>
          <Image src={Logo} alt='logo' className={classes.LogoImg} />
        </a>
        {/* Booktagram Logo */}
      </Link>
      <div className={classes.navItems}>
        <ul className={classes.navList}>
          <Navitem to='/' translationId='nav_home' />
          <Navitem to='/news' translationId='nav_news' />
          <Navitem to='/events' translationId='nav_events' />
          {/* <Navitem to='/shop' translationId='nav_shop' /> */}
          {/* <Navitem to='/clubs' translationId='nav_club' /> */}
          {/* <Navitem to='/guide' translationId='nav_guide' /> */}
          <Navitem to='/about' translationId='nav_about' />
          <Navitem to='/contactus' translationId='nav_contactus' />
        </ul>
      </div>
      {/* <LoginModal /> */}

      <div className={classes.navBtns}>
        {/* <Button style={{ marginRight: '5px' }} onClick={signUpOpen}>
          {f('nav_signup')}
        </Button>
        <Button variant='outline' onClick={signInOpen}>
          {f('nav_login')}
        </Button> */}
        <NavLang />
        {data && (
          <Flex gap='10px'>
            <Button onClick={() => router.push('/dashboard')}>Dashboard</Button>
            <Button variant='outline' onClick={signOut}>
              Log out
            </Button>
          </Flex>
        )}
      </div>
    </div>
  );
};

export default Nav;
