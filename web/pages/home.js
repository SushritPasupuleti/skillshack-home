import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typography from '@material-ui/core/Typography'
import NavBar from '../components/NavBar'
import Header from '../components/sections/Header'
import { Provider, Heading, Subhead, NavLink, Relative, Absolute, Small, Pre } from 'rebass'
import {
    Hero, CallToAction, ScrollDownIndicator, Flex, Feature, Section, Checklist, Contributor
} from 'react-landing-page'
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
            <div className={styles.app}
            >
                <NavBar />
                <div
                    className={styles.appBody}
                >
                    <Hero
                        color="white"
                        bg="black"
                    // backgroundImage="https://source.unsplash.com/jxaj-UrzQbc/1600x900"
                    >
                        {/* <Heading>skillShack(⚡);</Heading> */}
                        <Typography variant="h1" color="initial">skillShack(⚡);</Typography>
                        <Typography style={{ textAlign: 'center' }} variant="h6" color="initial">The Next-Generation Social Network for Software Professionals.</Typography>
                        {/* <Subhead style={{ textAlign: 'center' }}>The Next-Generation Social Network for Software Professionals.</Subhead> */}
                        {/* <Image
            src="/undraw_career_progress_ivdb.svg"
            width={500}
            height={500}></Image> */}
                        <br />
                        <CallToAction
                            mt={3}><a href='https://forms.gle/pxkC7VqkKqFVkS1s6' target="_blank">Coming Soon! Get Nofified</a>
                        </CallToAction>
                        <br />
                        <img style={{ height: '50vh' }} src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"></img>
                        <ScrollDownIndicator />
                    </Hero>
                </div>
            </div>
        </>
    )
}