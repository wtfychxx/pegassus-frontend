import { redirect } from 'next/navigation'
import { getSessionData } from '../helpers/session'

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getSessionData()
  // console.log('session saat ini:', session)

  if (session === null) {
    redirect('/')
  }

  return (
    <section>
      <div className='flex h-screen overflow-hidden'>
        <div className='flex-1 flex flex-col bg-gray-100'>
          {/* Content */}
          <main className='flex-1 p-6 transition-opacity duration-300 ease-in-out'>
            {children}
          </main>
        </div>
      </div>
    </section>
  )
}
