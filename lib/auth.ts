import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { db } from "../index";
import { nextCookies } from "better-auth/next-js";
import { headers } from "next/headers";
import "dotenv/config"

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
	}),
  emailAndPassword: {
    enabled: true
  },
	plugins: [nextCookies()],
	pages: {
		signIn: "/signin",
	},
	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID as string,		
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		},
	},
});

//We can use this in our pages to check if a user is authorized or not.
export const getSession = async () => auth.api.getSession({	
	headers: await headers(),
})