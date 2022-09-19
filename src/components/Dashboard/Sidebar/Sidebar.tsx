import React from 'react';
import classes from './Sidebar.module.scss';
import SidebarItem from '../SidebarItem/SidebarItem';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import { useTranslations } from 'next-intl';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const t = useTranslations('');
  const { data: sessionData } = useSession();
  const router = useRouter();
  return (
    <div className={classes.Sidebar}>
      <ProfileIcon name={sessionData?.user?.name} />
      <div className={classes.Links}>
        <ul className={classes.DashList}>
          <SidebarItem to='/' icon='fas fa-home'>
            {t('nav_home')}
          </SidebarItem>
          <SidebarItem to='/myprofile' icon='fas fa-user'>
            {t('nav_profile')}
          </SidebarItem>
          <SidebarItem to='/dashboard/events' icon='fas fa-calendar-day'>
            {t('nav_events')}
          </SidebarItem>
          <SidebarItem to='/news' icon='fas fa-newspaper'>
            {t('nav_news')}
          </SidebarItem>
          {/* <SidebarItem to='/mybooks' icon='fas fa-book'>
            {t('nav_mybooks')}
          </SidebarItem>
          <SidebarItem to='/clubs' icon='fas fa-users'>
            {t('nav_club')}
          </SidebarItem>
          <SidebarItem to='/shop' icon='fas fa-shopping-cart'>
            {t('nav_shop')}
          </SidebarItem>
          <SidebarItem to='/guide' icon='fas fa-book-open'>
            {t('nav_guide')}
          </SidebarItem>
          <SidebarItem to='/message' icon='far fa-envelope'>
            {t('nav_message')}
          </SidebarItem>

          <SidebarItem to='/accountsetting' icon='fas fa-cog'>
            {t('nav_accountSetting')}
          </SidebarItem> */}
          <SidebarItem
            onClick={() => signOut().then(() => router.push('/'))}
            to='/logout'
            icon='fas fa-sign-out-alt'
          >
            {t('nav_logout')}
          </SidebarItem>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
