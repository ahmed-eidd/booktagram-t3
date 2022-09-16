import Dashboard from '@/components/Dashboard/Dashboard';
import { GetServerSidePropsContext } from 'next';
import React from 'react';

const dashboard = () => {
  return (
    <Dashboard>
      <div>Hello world</div>
    </Dashboard>
  );
};

export default dashboard;

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../../content/locale/${locale}.json`)).default,
    },
  };
}
