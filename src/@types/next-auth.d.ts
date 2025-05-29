import NextAuth, { DefaultSession, DefaultUser } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      token: string
      roleId: string
      role: string
      menu: any // Sesuaikan dengan struktur menu yang dikembalikan dari API
    } & DefaultSession['user']
  }

  interface User extends DefaultUser {
    id: string
    email: string
    token: string
    roleId: string
    role: string
    menu: any
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    email: string
    token: string
    roleId: string
    role: string
    menu: any
  }
}
