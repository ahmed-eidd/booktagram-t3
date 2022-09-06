import React from 'react';
import Button from '../../../Button/Button';
import classes from './Header.module.scss';
import { useIntl } from 'react-intl';
// import HeaderImg from '../../../../assests/Group_3642x.png';
import HeaderImg from '../../../../assests/main-background.png';
import Image from 'next/image';
import { GetServerSidePropsContext } from 'next';
import { useTranslations } from 'next-intl';
// import { setAuthModalOpen } from '../../../../store/auth/action';

const Header = () => {
  const t = useTranslations('');
  return (
    <section className={classes.Header}>
      <Image src={HeaderImg} alt='background' />
      <div className={classes.HeaderText}>
        <h3>{t('booktagram')}</h3>
        <p>{t('header_text')}</p>

        <Button
          type='link'
          to='#'
          style={{ marginRight: 'auto' }}
          // onClick={() => dispatch(setAuthModalOpen('signin'))}
        >
          {t('nav_signup')}
        </Button>
      </div>
    </section>
  );
};

export default Header;

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../../../../content/locale/${locale}.json`)).default,
    },
  };
}
