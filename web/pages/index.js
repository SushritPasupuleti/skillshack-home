import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typography from '@material-ui/core/Typography'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>skillShack</title>
        <link rel="icon" href="/applogox64.ico" />
      </Head>
      <Typography variant="h1" color="initial">skillShack(⚡);</Typography>
      <Typography variant="body1" color="initial">The Next-Generation Social Network for Software Professionals.</Typography>
    </div>
  )
}
