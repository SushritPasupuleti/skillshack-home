import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typography from '@material-ui/core/Typography'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeaderImage from '../components/HeaderImage'
import { Provider, Heading, Subhead, NavLink, Relative, Absolute, Small } from 'rebass'
import {
  Hero, CallToAction, ScrollDownIndicator, Flex, Feature, Section, Checklist
} from 'react-landing-page'

export default function Home() {
  return (
    <div className={styles.app}>
      {/* <NavBar /> */}
      <div className={styles.appBody}>
        <Relative pb={5}>
          <Absolute zIndex={1} left={0} right={0} top={0}>
            <Flex is="header" p={3}>
              <NavLink href="/" fontSize={3}>skillShack(⚡);</NavLink>
              {/* <NavLink href="#" ml='auto'>Link 1</NavLink>
              <NavLink href="#">Link 2</NavLink> */}
            </Flex>
          </Absolute>
        </Relative>
        <Hero
          color="white"
          bg="black"
        // backgroundImage="https://source.unsplash.com/jxaj-UrzQbc/1600x900"
        >
          <Heading>skillShack(⚡);</Heading>
          <Subhead style={{ textAlign: 'center' }}>The Next-Generation Social Network for Software Professionals.</Subhead>
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
          <Checklist children={[
            'Create',
            'Share',
            'Discuss',
            'Grow',
          ]} />
        </Section>
        <Flex is="footer" alignItems="center" p={3}>
          <NavLink children="Instagram" href="#" />
          <NavLink children="Twitter" href="#" />
          <NavLink children="YouTube" href="#" />
          <Small ml="auto">© skillShack(⚡); 2021</Small>
        </Flex>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
