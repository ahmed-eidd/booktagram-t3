import { Spinner, useToast, Input, Button } from '@chakra-ui/react';
import type { NextPage } from 'next';
import React from 'react';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);
  const addEvent = trpc.useMutation(['eventaddEvent']);
  const { data: events, isLoading } = trpc.useQuery(['eventgetAllEvents']);
  const toast = useToast();
  console.log(events);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    addEvent.mutate(
      {
        date: new Date(),
        name: 'Test Name',
        location: 'test Location',
        speakers: 'Ahmed Eid',
        time: '12:00Pm',
        type: 'Offline',
        desription: '',
      },
      {
        onSuccess: (req) => {
          console.log('req', req);
          toast({
            title: 'Success',
            status: 'success',
          });
        },
      }
    );
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <Input></Input>
        <Button type='submit'>Click Me</Button>
      </form>
      {isLoading ? (
        <Spinner />
      ) : (
        events?.map((el) => <p key={el.id}>{el.name}</p>)
      )}
    </>
  );
};
export default Home;
