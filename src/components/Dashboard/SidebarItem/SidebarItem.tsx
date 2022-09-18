import React from 'react';
import classes from './SidebarItem.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface SidebarItemProps {
  children: React.ReactNode;
  to: string;
  icon: string;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  children,
  to,
  icon,
  onClick,
}) => {
  const router = useRouter();
  const { pathname } = router;
  // const pathArr = pathname.split('/');
  let attachedClasses = [classes.DashItem].join('');
  // if (pathname === to) {
  // if (pathArr.some((el) => `/${el}` === to) || pathname === to) {
  if (pathname === `/${to}`) {
    attachedClasses = [classes.DashItem, classes.active].join(' ');
  }
  return (
    <li className={attachedClasses} onClick={onClick}>
      {icon && <i className={icon}></i>}

      <Link href={to}>
        <a
          style={{
            display: 'inline-block',
            width: '160px',
          }}
        >
          {children}
        </a>
      </Link>
    </li>
  );
};

export default SidebarItem;
