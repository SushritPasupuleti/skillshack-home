import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>skillShack</title>
        <link rel="icon" href="/applogox64.ico" />
      </Head>
      <p>Hi!</p>
    </div>
  )
}
