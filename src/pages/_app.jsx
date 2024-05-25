import { useEffect, useRef } from 'react'
import { Analytics } from '@vercel/analytics/react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

import '@/styles/tailwind.css'
import 'focus-visible'
import ChatHead from '@/components/ChatHead'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-6xl lg:px-8">
            <div className="w-full bg-white bg-background ring-1 ring-zinc-100 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          <Header />
          <main>
            <Component previousPathname={previousPathname} {...pageProps} />
            <Analytics />
            <ChatHead />
          </main>
          <Footer />
          <Toaster />
        </div>
      </ThemeProvider>
    </>
  )
}
