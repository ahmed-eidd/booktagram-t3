// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { exampleRouter } from './example';
import { eventRouter } from './events';
import { serverRouter } from './authRouter';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('example.', exampleRouter)
  // .merge('auth.', protectedExampleRouter)
  .merge('auth.', serverRouter)
  .merge('event.', eventRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
