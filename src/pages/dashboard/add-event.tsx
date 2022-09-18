import Button from '@/components/Button/Button';
import Dashboard from '@/components/Dashboard/Dashboard';
import FormCalendar from '@/components/Form/Calendar/Calendar';
import FormGroup from '@/components/Form/FormGroup/FormGroup';
import InputField from '@/components/Form/InputField/InputField';
import Select from '@/components/Form/Select/Select';
import TextArea from '@/components/Form/TextArea/TextArea';
import { trpc } from '@/utils/trpc';
import { Box } from '@chakra-ui/react';
import { Formik } from 'formik';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().default('').required(),
  location: Yup.string().default('').required(),
  type: Yup.string().default('').required(),
  speakers: Yup.string().default('').required(),
  time: Yup.string().default('').required(),
  date: Yup.date().default(new Date()).required(),
  description: Yup.string().default('').required(),
});

const AddEvent = () => {
  const eventMutate = trpc.useMutation(['event.addEvent']);
  const router = useRouter();
  return (
    <Dashboard>
      <Box>
        <Formik
          onSubmit={(values) => {
            eventMutate.mutate(
              { ...values, time: values.time.toString() },
              {
                onSuccess: () => {
                  router.push('/dashboard/events');
                },
              }
            );
          }}
          validationSchema={schema}
          initialValues={schema.cast({})}
        >
          {() => (
            <FormGroup>
              <h4>Create Event</h4>

              <InputField
                label='Event Name'
                placeholder='Event Name'
                type='text'
                name='name'
              />
              <InputField
                label='Location'
                placeholder='Location'
                type='text'
                name='location'
              />
              <InputField
                label='Speakers'
                placeholder='Speakers'
                type='text'
                name='speakers'
              />
              <InputField
                label='Time'
                placeholder='Time'
                type='number'
                name='time'
              />
              <TextArea
                label='Description'
                placeholder='Desription'
                name='description'
              />

              <FormCalendar minDate={new Date()} name='date' />

              <Select
                options={[
                  { label: 'Offline', value: 'offline' },
                  { label: 'Online', value: 'online' },
                ]}
                name='type'
              />

              <Button type='submit'>Create</Button>
            </FormGroup>
          )}
        </Formik>
      </Box>
    </Dashboard>
  );
};

export default AddEvent;

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
