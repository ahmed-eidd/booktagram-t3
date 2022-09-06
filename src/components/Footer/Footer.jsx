import React from 'react';
import classes from './Footer.module.scss';
import { useIntl } from 'react-intl';
import FooterLink from './FooterLink/FooterLink';
import { Input } from '@chakra-ui/react';
import Button from '../Button/Button';
import { useTranslations, useLocale } from 'next-intl';

const Footer = () => {
  // const { formatMessage } = useIntl();
  const t = useTranslations('');
  return (
    <div className={classes.Footer}>
      <div className={classes.FooterFirst}>
        <div className={classes.FooterAbout}>
          <h4>{t('footer_about_title')}</h4>
          <p>{t('footer_about_text')}</p>
        </div>
        <div className={classes.FooterQuickLinks}>
          <h4>{t('footer_quick_links_title')}</h4>
          <ul>
            {/* link container */}
            <FooterLink to='/'> {t('footer_quick_link_shop')} </FooterLink>
            <FooterLink to='/'> {t('footer_quick_link_guide')} </FooterLink>
            <FooterLink to='/'> {t('footer_quick_link_events')} </FooterLink>
            <FooterLink to='/'> {t('footer_quick_link_clubs')} </FooterLink>
            <FooterLink to='/'> {t('footer_quick_link_news')} </FooterLink>
            <FooterLink to='/'> {t('footer_quick_link_reviews')} </FooterLink>
          </ul>
        </div>

        <form action='' className={classes.FooterForm}>
          <h4>{t('footer_newsletter')}</h4>
          <Input
            placeholder='Enter Your Email'
            className={classes.Input}
          ></Input>
          <Button
            variant='outline'
            style={{
              border: '1px solid #ffffff',
              borderRaduis: '50px',
              backgroundColor: '#ffffff',
            }}
            type='submit'
          >
            {t('footer_btn')}
          </Button>
        </form>
      </div>
      <div>
        <div>terms</div>
        <div>all rights</div>
        <div>icons</div>
      </div>
    </div>
  );
};

export default Footer;
