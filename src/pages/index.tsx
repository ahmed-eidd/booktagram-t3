import { GetServerSidePropsContext } from 'next';

import Header from '@/components/Pages/Home/Header/Header';
import AboutSection from '@/components/Pages/Home/AboutSection/AboutSection';
import Layout from '@/components/Layout/Layout';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data } = useSession();
  console.log(data);
  return (
    <Layout>
      <Header />
      <AboutSection />
    </Layout>
  );
}

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../content/locale/${locale}.json`)).default,
    },
  };
}
