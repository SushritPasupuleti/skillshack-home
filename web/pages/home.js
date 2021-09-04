import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typography from '@material-ui/core/Typography'
import NavBar from '../components/NavBar'

export default function Home() {
    return (
        <>
            <Head>
                <title>skillShack(⚡);</title>
                <link rel="icon" href="/applogox64.ico" />
                <meta name="description" content="The Next-Generation Social Network for Software Professionals." />

                <meta property="og:url" content="https://skillshack.dev" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="skillShack(⚡);" />
                <meta property="og:description" content="The Next-Generation Social Network for Software Professionals." />
                <meta property="og:image" content="https://www.skillshack.dev/letterLogoClippedColoredSocial.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="skillshack.dev" />
                <meta property="twitter:url" content="https://skillshack.dev" />
                <meta name="twitter:title" content="skillShack(⚡);" />
                <meta name="twitter:description" content="The Next-Generation Social Network for Software Professionals." />
                <meta name="twitter:image" content="https://www.skillshack.dev/letterLogoClippedColoredSocial.png" />
            </Head>
            <div className={styles.app}>
                <NavBar />
                <div className={styles.appBody}>

                </div>
            </div>
        </>
    )
}