import {PrismaAdapter} from '@next-auth/prisma-adapter';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import {getServerSession, type DefaultSession, type NextAuthOptions} from 'next-auth';
import {prisma} from '~/config/db';

/**
 * Module augmentation for `next-auth` types.
 * Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  interface User {
    email: string,
    name: string,
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session({session, user}) {
      console.log('Session callback', session, session.user);
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    }),
    CredentialsProvider({
      name: "Credentials",
      // `credentials` is used to generate a form on the sign-in page.
      credentials: {
        names: {type: 'text'},
        email: {type: 'email'},
        password: {type: 'password'},
        passwordRepeat: {type: 'password'},
      },
      authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = {id: '', name: "J Smith", email: "jsmith@example.com"}

        console.log(req);

        console.log('we are here??', credentials);

        return {
          id: '112',
          name: 'J smith',
          email: 'a.dragomir1996@abv.bg',
        }


        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export function getServerAuthSession() {
  return getServerSession(authOptions);
}
