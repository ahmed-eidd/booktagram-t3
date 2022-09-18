import Dashboard from '@/components/Dashboard/Dashboard';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
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
  ...context
}: GetServerSidePropsContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../../content/locale/${locale}.json`)).default,
    },
  };
}
