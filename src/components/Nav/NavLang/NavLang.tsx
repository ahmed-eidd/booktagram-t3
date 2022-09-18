import React from 'react';
// import { changeLocaleAction } from '../../../storeRedux/locale/action';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classes from './NavLang.module.scss';

const NavLang = () => {
  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);

  return (
    <Link href={route} locale={otherLocale}>
      <a className={classes.NavLang}>{otherLocale}</a>
    </Link>
  );
};

export default NavLang;
