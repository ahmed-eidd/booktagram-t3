import React from 'react';
import classes from './AboutCard.module.scss';
import { useIntl } from 'react-intl';
import { useTranslations } from 'next-intl';

const AboutCard = ({ title, des, iconClass }) => {
  const t = useTranslations('');
  return (
    <div className={classes.CardContainer}>
      <div className={classes.IconContainer}>
        <i className={iconClass}></i>
      </div>
      <h4>{t(title)}</h4>
      {/* {console.log(title)} */}
      <p className='text'>{t(des)}</p>
    </div>
  );
};

export default AboutCard;
