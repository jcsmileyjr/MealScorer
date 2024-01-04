import Image from 'next/image'
import styles from './page.module.css'

import Header from '@/component/Header/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      Hello World - Meal Scorer
    </main>
  )
}
