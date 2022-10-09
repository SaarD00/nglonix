import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentailProvder from "next-auth/providers/credentials";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentailProvder({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "SaarDOO" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (
          credentials?.username === "Test" &&
          credentials?.password === "test"
        ) {
          return {
            id: 1,
            name: "Dont click me",
            email: "srivastavasamayara30@gmail.com",
          };
        }
        if (
          credentials?.username === "Samayara Srivastava" &&
          credentials?.password === "amongus6969"
        ) {
          return {
            id: 2,
            name: "Samayara Srivastava",
            email: "srivastavasamayara30@gmail.com",
            image:
              "https://cdn.sanity.io/images/mrfd4see/production/5db389be209c96202064cddba475d2eed0a3f287-606x723.jpg",
          };
        }
        if (
          credentials?.username === "Shilpa Sawalkar" &&
          credentials?.password === "amogus6969"
        ) {
          return {
            id: 3,
            name: "Shilpa Sawalkar",
            email: "shilpa.sawalkar@vgos.org",
            image:
              "https://teams.microsoft.com/api/mt/apac/beta/users/8:orgid:711fb9cf-6843-404c-9dc7-e1c7dc772e7b/profilepicturev2?displayname=Shilpa%20Sawalkar&size=HR64x64",
          };
        }

        if (
          credentials?.username === "SaarDOO" &&
          credentials?.password === "I<3Sam@6969"
        ) {
          return {
            id: 4,
            name: "SaarDOO ",
            email: "astrosaard@gmail.com",
            image:
              "https://i.scdn.co/image/ab6775700000ee85617839eb4593623cc34f554e",
          };
        }
        return null;
      },
    }),
  ],
});
