import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typography from '@material-ui/core/Typography'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeaderImage from '../components/HeaderImage'
import { Provider, Heading, Subhead } from 'rebass'
import {
  Hero, CallToAction, ScrollDownIndicator, Flex, Feature
} from 'react-landing-page'

export default function Home() {
  return (
    <div className={styles.app}>
      <NavBar />
      <div className={styles.appBody}>
        <Hero
          color="black"
          bg="white"
          backgroundImage="https://source.unsplash.com/jxaj-UrzQbc/1600x900"
        >
          <Heading>skillShack(⚡);</Heading>
          <Subhead>The Next-Generation Social Network for Software Professionals.</Subhead>
          <CallToAction href="/getting-started" mt={3}>Get Started</CallToAction>
          <ScrollDownIndicator />
        </Hero>
        <Heading textAlign="center">What is inside?</Heading>
        <Flex flexWrap="wrap" justifyContent="center">
          <Feature icon="👋" description="What your users see first">
            Hero
    </Feature>
          <Feature icon="🔥" description="What your app can do">
            Features
    </Feature>
          <Feature icon="📩" description="How to keep in touch">
            Sign Up
    </Feature>
        </Flex>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
