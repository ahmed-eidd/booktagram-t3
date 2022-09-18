import { Box, Heading, Spinner, Stack } from '@chakra-ui/react';
import React from 'react';
import Event from '@/components/Event/Event';
import Layout from '@/components/Layout/Layout';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { trpc } from '@/utils/trpc';
import { monthNames } from '@/utilities/monthNames';

const events = () => {
  const { data, isLoading } = trpc.useQuery(['eventgetAllEvents'], {
    refetchOnMount: true, 
  });
  return (
    <Layout>
      <Box>
        <Heading textAlign='center' my={5}>
          Events
        </Heading>

        <Stack spacing='3rem' justify='center' align='center'>
          {isLoading ? (
            <Spinner />
          ) : (
            data?.map((evt) => {
              return (
                <Event
                  time={+evt.time}
                  day={evt.date.getDay()}
                  month={monthNames[evt.date.getMonth()]}
                  title={evt.name}
                  key={evt.id}
                  description={evt.description}
                  id={evt.id}
                  location={evt.location}
                  speakers={evt.speakers}
                />
              );
            })
          )}
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
