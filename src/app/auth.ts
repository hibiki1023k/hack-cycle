import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";

const AUTH_RESEND_KEY = process.env.AUTH_RESEND_KEY;

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Resend({
      // If your environment variable is named differently than default
      apiKey: AUTH_RESEND_KEY,
      from: "no-reply@semikoron.org",
    }),
  ],
});
