import NextAuth, { CredentialsSignin } from 'next-auth';
import Credentials from "next-auth/providers/credentials";
import { compare } from 'bcryptjs';
import  prisma  from '@/lib/prisma';


class MissingFieldsError extends CredentialsSignin { code = "MissingFields" }
class UserNotFoundError extends CredentialsSignin { code = "UserNotFound" }
class InvalidPasswordError extends CredentialsSignin { code = "InvalidPassword" }



export const { handlers, auth, signIn, signOut } = NextAuth  ({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        contact: { label: 'contact', type: 'text' },
        Pasword: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.Pasword || !credentials.contact) {
          throw new MissingFieldsError();
        }

        const values = {
          contact: credentials.contact as string,
        };

        const findUser = await prisma.user.findFirst({
          where: values,     
        });

        if (!findUser) {
         throw new UserNotFoundError(); 
        }
       
        const isPasswordValid = await compare(credentials.Pasword  as string, findUser.Pasword);
        if (!isPasswordValid) {
          throw new InvalidPasswordError();
        }

        return {
          id: String(findUser.id),
          name: findUser.name,
          contact: findUser.contact,
          email: findUser.email,
          LastName: findUser.LastName,
          Address: findUser.Address,  
        };
      },
    }),
  ],
  secret: process.env.BETTER_AUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {

      if (user) {
        token.id = user.id;
        token.contact = user.contact;
      }

      if (token.contact) {
        const findUser = await prisma.user.findFirst({
          where: {
            contact: token.contact as string,
          },  
        });
      

        if (findUser) {
        token.id = String(findUser.id);
        token.name = findUser.name;
        token.contact = findUser.contact;
        token.email =  findUser.email;
        token.LastName = findUser.LastName;
        token.Address = findUser.Address;
        }
      }

      if (trigger === "update" && session) {

        if (session.updateType === "wishlist") {
          const currentUser = (token.user as Record<string, unknown>) || {};
      
          token.user = {
            ...currentUser,
            ...session.user,
          };
      
         return token;
        }

        if (session.updateType === "cart") {
          const currentUser = (token.user as Record<string, unknown>) || {};
      
          token.user = {
            ...currentUser,
            ...session.user,
          };
      
         return token;
        }

        return { ...token, ...session.user };

      }

      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id as string;
        session.user.name = token.name;
        session.user.email = token.email ?? ""; 
        session.user.contact = token.contact;
        session.user.LastName = token.LastName;
        session.user.Address = token.Address;
      }

      return session;
    },
  },
});

export const GET = handlers.GET;
export const POST = handlers.POST;