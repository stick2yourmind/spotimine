import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <header>
      <div>Logo</div>
      <button>
        <span>English</span>
        <span>Spanish</span>
      </button>
    </header>
    
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    </main>
    </>
  )
}
