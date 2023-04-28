import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '../styles/general.module.css'
import { MainLayout } from '../components/layout/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (    
    <MainLayout>
      <h1>Home Page</h1>
      <h1 className={styles.description}>
        Ir a <Link href="/about">About</Link>
      </h1>

    </MainLayout>    
  )
}
