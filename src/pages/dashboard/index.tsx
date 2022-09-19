import DashboardLayout from '@/components/Dashboard/Dashboard';
import { GetServerSidePropsContext } from 'next';
// import { getSession } from 'next-auth/react';
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/router';
import React from 'react';

const DashboardPage = () => {
  // const { data } = useSession();
  // const router = useRouter();
  return (
    <DashboardLayout>
      <div>Hello world</div>
    </DashboardLayout>
  );
};

export default DashboardPage;

export async function getServerSideProps({
  locale,
}: // ...context
GetServerSidePropsContext) {
  // const session = await getSession(context);
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/login',
  //       permanent: false,
  //     },
  //   };
  // }
  return {
    props: {
      // session,
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../../content/locale/${locale}.json`)).default,
    },
  };
}
