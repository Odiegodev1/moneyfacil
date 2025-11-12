import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],

  // 🔑 Configurações obrigatórias para produção
  trustHost: true, // resolve o erro InvalidCheck na Vercel
  secret: process.env.NEXTAUTH_SECRET,
  useSecureCookies: process.env.NEXTAUTH_URL?.startsWith("https://"),

  // 🔹 Opcional: páginas personalizadas
  pages: {
    signIn: "/login",     // se tiver página de login customizada
    error: "/auth/error", // página de erro
  },

  // 🔹 Cookies podem ser ajustados se houver problemas persistentes
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NEXTAUTH_URL?.startsWith("https://"),
      },
    },
  },
})
