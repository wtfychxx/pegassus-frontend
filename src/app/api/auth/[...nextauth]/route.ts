import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { loginAccount } from '../../authentication' // Sesuaikan path dengan struktur project Anda

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 hari
    updateAge: 30,
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string
          password: string
        }

        const result = await loginAccount(email, password)

        if (!result?.success) {
          throw new Error(result?.message || 'Login failed')
        }

        return {
          id: result.data.id,
          name: result.data.name,
          email: result.data.email,
          token: result.data.token,
          roleId: result.data.roleId,
          role: result.data.role,
          menu: result.data.menu,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.name = user.name
        token.email = user.email
        token.token = user.token
        token.roleId = user.roleId
        token.role = user.role
        token.menu = user.menu
      }
      return token
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
        name: token.name ?? '-',
        email: token.email,
        token: token.token,
        roleId: token.roleId,
        role: token.role,
        menu: token.menu,
      }
      return session
    },
  },
  pages: {
    signIn: '/',
    error: '/auth/login?error=1',
  },
}

// ✅ App Router membutuhkan `GET` dan `POST` handler
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
