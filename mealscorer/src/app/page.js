//import Image from 'next/image'
import styles from './page.module.css'

import Header from '@/component/Header/page'
import CTAButton from '@/component/CTAButton/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.createFoodButtonContainer}>
        <CTAButton link="/pages/CreateNewFood" title="Create Food Item" />
      </section>
    </main>
  )
}
