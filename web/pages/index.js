import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typography from '@material-ui/core/Typography'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeaderImage from '../components/HeaderImage'

export default function Home() {
  return (
    <div className={styles.app}>
      <NavBar />
      <div className={styles.appBody}>
        <div className={styles.container}>
          <Head>
            <title>skillShack</title>
            <link rel="icon" href="/applogox64.ico" />
          </Head>
          <Typography variant="h2" color="initial">skillShack(⚡);</Typography>
          <Typography variant="body2" color="initial" align="center">The Next-Generation Social Network for Software Professionals.</Typography>
          <Image
            src="/undraw_career_progress_ivdb.svg"
            width={500}
            height={500}></Image>
          {/* <HeaderImage/> */}
          <Typography variant="body2" color="initial">Coming Soon...</Typography>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  )
}
