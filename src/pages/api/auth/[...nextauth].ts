import NextAuth, { type NextAuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import CredentialsProvider from 'next-auth/providers/credentials';
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '../../../server/db/client';
import { env } from '../../../env/server.mjs';
import { verify } from 'argon2';
import { loginSchema } from '@/common/validation/auth';

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'jsmith@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // const { email, password } = credentials;
        const creds: { email: string; password: string } =
          await loginSchema.parseAsync({
            email: credentials?.email,
            password: credentials?.password,
          });

        const user = await prisma.user.findFirst({
          where: { email: 'omarbakry@noob.com' },
        });

        if (!user) {
          return {
            message: 'user not found',
          };
        }

        const isValidPassword = await verify(user.password, creds.password);

        console.log('test', isValidPassword);
        if (!isValidPassword) {
          return null;
        }

        // return {
        //   id: user.id,
        //   email: user.email,
        // };
        return {
          message: 'Succes Login',
        };
      },
    }),
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
