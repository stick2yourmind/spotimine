import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useLanguage } from '@/hooks/useLanguage';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { language, setEnglish, setSpanish } = useLanguage();
  return (
    <>
    <header>
      <div>Logo</div>
      <div>
        <button onClick={() => setEnglish()}>English</button>
        <button onClick={() => setSpanish()}>Spanish</button>
      </div>
      <span>current language: {language}</span>
    </header>
    
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    </main>
    </>
  )
}
