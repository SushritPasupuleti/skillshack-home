import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typography from '@material-ui/core/Typography'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeaderImage from '../components/HeaderImage'
import { Provider, Heading, Subhead, NavLink, Relative, Absolute, Small } from 'rebass'
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
        <meta property="og:image" content="https://www.skillshack.dev/logoClipped.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="skillshack.dev" />
        <meta property="twitter:url" content="https://skillshack.dev" />
        <meta name="twitter:title" content="skillShack(⚡);" />
        <meta name="twitter:description" content="The Next-Generation Social Network for Software Professionals." />
        <meta name="twitter:image" content="https://www.skillshack.dev/logoClipped.png" />
      </Head>
      <div className={styles.app}>
        {/* <NavBar /> */}
        <div className={styles.appBody}>
          <Relative pb={5} color="white">
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
            {/* <Image
            src="/undraw_career_progress_ivdb.svg"
            width={500}
            height={500}></Image> */}
            <CallToAction
              // href="/getting-started"
              mt={3}>Coming Soon</CallToAction>
            <ScrollDownIndicator />
          </Hero>
          <Heading color="white" textAlign="center">What's inside?</Heading>
          <Flex color="white" flexWrap="wrap" justifyContent="center">
            <Feature icon="💡" description="Share Ideas">
              Blogs, Videos, Podcasts
          </Feature>
            <Feature icon="✨" description="Stay upto date with the newest technologies and trends">
              Curated Feed
          </Feature>
            <Feature icon="🤔" description="Ask doubts, answers doubts, get noticed, brag!">
              Forums
          </Feature>
            <Feature icon="💼" description="Find jobs, create jobs, get the job done!">
              Jobs/Internships
          </Feature>
            <Feature icon="🔮" description="And many more...">
              ???
          </Feature>
          </Flex>
          <Section
            bg='black'
            color="white"
            heading="What no Social Network has done before for Professionals"
            subhead="Gamify learning!">
            {/* Learn while you scroll through feeds endlessly. */}
            <Checklist children={[
              'Create',
              'Share',
              'Discuss',
              'Grow',
            ]} />
            <CallToAction
            // href='/getting-started'
            >Get Notified!</CallToAction>
          </Section>
          <Section
            // style={{ marginTop: '-6rem' }}
            bg='black'
            color="white">
            <Heading textAlign="center">Made by</Heading>
            <br />
            <Flex justifyContent="space-around">
              <Contributor
                fullName="Sushrit Pasupuleti"
                title="CEO & CTO @ Braggi Solutions"
                avatar="/me.jpg"
              >
                <Flex>
                  <NavLink href='https://sushritpasupuleti.github.io/'>View Profile</NavLink>
                </Flex>
              </Contributor>
            </Flex>
          </Section>
          <Flex color="white" is="footer" alignItems="center" p={3}>
            <NavLink children="Instagram" href="#" />
            <NavLink children="Twitter" href="#" />
            <NavLink children="YouTube" href="#" />
            <Small ml="auto">© skillShack(⚡); 2021</Small>
          </Flex>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  )
}
