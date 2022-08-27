import NextAuth from "next-auth";
import Providers from "../../../utils/auth-providers";

export default NextAuth({
  providers: [...Providers],
});
