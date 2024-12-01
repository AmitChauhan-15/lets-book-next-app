import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectToDb } from "./db";
import User from "../_models/userModel";
import { findUser } from "./data-service";

class CustomError extends CredentialsSignin {
  code = "custom";
}

const authConfig = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials, req) {
        await connectToDb();
        try {
          const user = await findUser(credentials);
          if (!user) {
            throw new CustomError("Invalid Credential");
          }

          const isPasswordCorrect = await bcrypt.compare(credentials.password || "", user.password);
          if (isPasswordCorrect) {
            return {
              userid: user.id,
              email: user.email,
            };
          } else {
            throw new CustomError("Invalid Credential");
          }
        } catch (error) {
          console.log("Error : ", error);

          throw new CustomError(error.message || "Something went wrong.");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user.userid;
      }
      return token;
    },
    async session({ token, session }) {
      if (token) {
        session._id = token._id;
      }
      return session;
    },
  },
};

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth(authConfig);
