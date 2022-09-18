import { prisma } from './../db/client';
import { createRouter } from './context';
import { z } from 'zod';

export const eventRouter = createRouter()
  .mutation('addEvent', {
    input: z.object({
      name: z.string(),
      location: z.string(),
      type: z.string(),
      date: z.date(),
      speakers: z.string(),
      time: z.string(),
      description: z.string(),
    }),
    async resolve({ input }) {
      const newEvent = await prisma.event.create({
        data: { ...input },
      });
      return { success: true, newEvent };
    },
  })
  .query('getAllEvents', {
    async resolve() {
      return await prisma.event.findMany();
    },
  });
