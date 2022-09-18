import { createRouter } from './context';
import * as trpc from '@trpc/server';
import { hash } from 'argon2';

import { signUpSchema } from '@/common/validation/auth';

export const serverRouter = createRouter().mutation('signup', {
  input: signUpSchema,
  resolve: async ({ input, ctx }) => {
    const { email, password, name, role, country } = input;

    const exists = await ctx.prisma.user.findFirst({
      where: { email },
    });

    if (exists) {
      throw new trpc.TRPCError({
        code: 'CONFLICT',
        message: 'User already exists.',
      });
    }

    const hashedPassword = await hash(password);

    const result = await ctx.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role,
        country: country ?? '',
      },
    });

    return {
      status: 200,
      message: 'Account created successfully',
      result: result,
    };
  },
});

export type ServerRouter = typeof serverRouter;
