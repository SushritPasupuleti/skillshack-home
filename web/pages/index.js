import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typography from '@material-ui/core/Typography'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Head>
          <title>skillShack</title>
          <link rel="icon" href="/applogox64.ico" />
        </Head>
        <Typography variant="h2" color="initial">skillShack(⚡);</Typography>
        <Typography variant="body2" color="initial">The Next-Generation Social Network for Software Professionals.</Typography>
        <Image
          src="/undraw_career_progress_ivdb.svg"
          width={500}
          height={500}></Image>
        <Typography variant="body2" color="initial">Coming Soon...</Typography>
      </div>
    </>
  )
}
