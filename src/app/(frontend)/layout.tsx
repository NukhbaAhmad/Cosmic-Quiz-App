import { toastConfig } from '@/config/toast.config'
import './styles.css'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'

// ? Added Metadata for type Safety.
export const metadata: Metadata = {
  title: 'Cosmic Animal Quiz | Discover Your Soul Symbol',
  description:
    'Take the ultimate cosmic personality test to find out which celestial creature resonates with your energy.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <main>{children}</main>
        <Toaster {...toastConfig} />
      </body>
    </html>
  )
}
