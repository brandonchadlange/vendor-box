import CredentialsProvider from "next-auth/providers/credentials";

export default CredentialsProvider({
  name: "credentials",
  credentials: {
    email: { label: "Email Address", type: "text" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials, req) {
    return null;
  },
});
