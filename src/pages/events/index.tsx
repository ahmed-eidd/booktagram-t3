import { Box, Heading, Stack } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import Event from '@/components/Event/Event';
import Layout from '@/components/Layout/Layout';
import { GetServerSidePropsContext } from 'next';

const events = () => {
  return (
    <Layout>
      <Box>
        <Heading textAlign='center' my={5}>
          Events
        </Heading>
        <Stack spacing='3rem' justify='center' align='center'>
          <Event />
          <Event />
          <Event />
          <Event />
        </Stack>
      </Box>
    </Layout>
  );
};

export default events;

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
