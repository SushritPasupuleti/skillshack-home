import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typography from '@material-ui/core/Typography'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeaderImage from '../components/HeaderImage'
import { Provider, Heading, Subhead } from 'rebass'
import {
  Hero, CallToAction, ScrollDownIndicator, Flex, Feature, Section
} from 'react-landing-page'

export default function Home() {
  return (
    <div className={styles.app}>
      {/* <NavBar /> */}
      <div className={styles.appBody}>
        <Hero
          color="white"
          bg="black"
          // backgroundImage="https://source.unsplash.com/jxaj-UrzQbc/1600x900"
        >
          <Heading>skillShack(⚡);</Heading>
          <Subhead>The Next-Generation Social Network for Software Professionals.</Subhead>
          <CallToAction
            // href="/getting-started"
            mt={3}>Coming Soon</CallToAction>
          <ScrollDownIndicator />
        </Hero>
        <Heading textAlign="center">What's inside?</Heading>
        <Flex flexWrap="wrap" justifyContent="center">
          <Feature icon="💡" description="Share Ideas">
            Blogs, Videos, Podcasts
          </Feature>
          <Feature icon="🔥" description="Stay upto date with the newest technologies and trends">
            Curated Feed
          </Feature>
          <Feature icon="🤔" description="Ask doubts, answers doubts, get noticed, brag!">
            Forums
          </Feature>
        </Flex>
        <Section
          bg='black'
          heading="What no Social Network has done before for Professionals"
          subhead="Gamify learning!">
          {/* Learn while you scroll through feeds endlessly. */}
        </Section>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
