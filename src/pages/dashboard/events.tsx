import Button from '@/components/Button/Button';
import Dashboard from '@/components/Dashboard/Dashboard';
import Event from '@/components/Event/Event';
import { monthNames } from '@/utilities/monthNames';
import { trpc } from '@/utils/trpc';
import { Box, Flex, Heading, Spinner, Stack  } from '@chakra-ui/react';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const Events = () => {
  const router = useRouter();
  const { data, isLoading } = trpc.useQuery(['event.getAllEvents'], {
    refetchOnMount: true,
  });
  return (
    <Dashboard>
      <Box>
        <Heading textAlign='center' my={5}>
          Events
        </Heading>

        <Flex my={6} justify='flex-start' ml={6}>
          <Button onClick={() => router.push('/dashboard/add-event')}>
            Add Event
          </Button>
        </Flex>
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
    </Dashboard>
  );
};

export default Events;
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
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../../content/locale/${locale}.json`)).default,
    },
  };
}
