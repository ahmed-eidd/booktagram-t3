import React from 'react';
import classes from './NavItem.module.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface NavitemProps {
  children?: React.ReactNode;
  to: string;
  translationId: string;
}

const Navitem: React.FC<NavitemProps> = ({ children, to, translationId }) => {
  const t = useTranslations();
  return (
    <li className={classes.NavItem}>
      {/* <NavLink activeClassName={classes.active} exact to={to}>{f(translationId) || children}</NavLink> */}
      <Link href={to}>
        <a>{t(translationId) || children}</a>
      </Link>
    </li>
  );
};

export default Navitem;
