import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typography from '@material-ui/core/Typography'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeaderImage from '../components/HeaderImage'
import { Provider, Heading, Subhead, NavLink, Relative, Absolute, Small, Pre } from 'rebass'
import {
  Hero, CallToAction, ScrollDownIndicator, Flex, Feature, Section, Checklist, Contributor
} from 'react-landing-page'
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { BetaButton } from '../components/BetaButton'

export default function Home() {
  const matches = useMediaQuery('(min-width:600px)');
  const matchesBanners = useMediaQuery('(min-width:760px)');

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
          {/* <Relative pb={5} color="white">
            <Absolute zIndex={1} left={0} right={0} top={0}>
              <Flex is="header" p={3}>
                <NavLink href="/" fontSize={3}>skillShack(⚡);</NavLink>
              </Flex>
            </Absolute>
          </Relative> */}
          <Hero
            color="white"
            bg="black"
          // backgroundImage="https://source.unsplash.com/jxaj-UrzQbc/1600x900"
          >
            {/* <Heading>skillShack(⚡);</Heading> */}
            <div style={{ marginTop: '2rem' }}></div>
            <Typography variant="h1" color="initial">skillShack(⚡);</Typography>
            <Typography style={{ textAlign: 'center' }} variant="h6" color="initial">The Next-Generation Social Network for Software Professionals.</Typography>
            {/* <Subhead style={{ textAlign: 'center' }}>The Next-Generation Social Network for Software Professionals.</Subhead> */}
            {/* <Image
            src="/undraw_career_progress_ivdb.svg"
            width={500}
            height={500}></Image> */}
            <br />
            <CallToAction
              mt={3}><a href='https://forms.gle/pxkC7VqkKqFVkS1s6' target="_blank">Coming Soon! Get Nofified</a></CallToAction>
            {/* <BetaButton/> */}
            <div
              style={{ width: '100%', height: (matches ? '100vh' : '50vh'), position: 'relative' }}
            >
              <Image
                // style={{
                //   maxHeight: '100vh'
                // }}
                src={'/mainGraphic1.png'}
                // layout="responsive"
                layout="fill"
                objectFit="contain"
              // height={1920}
              // width={1920}
              />
            </div>
            <ScrollDownIndicator />
          </Hero>
          <Heading color="white" textAlign="center">What's inside?</Heading>
          <Flex color="white" flexWrap="wrap" justifyContent="center">
            <Feature icon="💡" description="Get inspiration for your next project">
              Project Ideas
            </Feature>
            <Feature icon="🌟" description="Share what you are working on and get quality feedback">
              Showcase your Projects
            </Feature>
            <Feature icon="🧪" description="Weekly challenges to test your coding skills">
              Challenges
            </Feature>
            <Feature icon="📚" description="Share Ideas">
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
            <Feature icon="🔮" description="And more...">
              ???
            </Feature>
          </Flex>
          {
            matchesBanners === true ? (
              <Image
                src={`/assets/banner-1.png`}
                alt="Banner"
                width={1500}
                height={500}
                layout="responsive"
              />
            ) : (
              <Image
                src={`/assets/banner-m-1.png`}
                alt="Banner"
                width={2560}
                height={1440}
                layout="responsive"
              />
            )
          }
          {
            matchesBanners === true ? (
              <Image
                src={`/assets/banner-2.png`}
                alt="Banner"
                width={1500}
                height={500}
                layout="responsive"
              />
            ) : (
              <Image
                src={`/assets/banner-m-2.png`}
                alt="Banner"
                width={2560}
                height={1440}
                layout="responsive"
              />
            )
          }
          {
            matchesBanners === true ? (
              <Image
                src={`/assets/banner-3.png`}
                alt="Banner"
                width={1500}
                height={500}
                layout="responsive"
              />
            ) : (
              <Image
                src={`/assets/banner-m-3.png`}
                alt="Banner"
                width={2560}
                height={1440}
                layout="responsive"
              />
            )
          }
          {/* <br /> */}
          {/* <Section
            bg='black'
            color="white"
            heading="What no Social Network has done before for Professionals"
            subhead="Gamify learning!">
            <Checklist children={[
              'Create',
              'Share',
              'Discuss',
              'Learn',
              'Grow',
            ]} />
            <CallToAction
            ><a href='https://forms.gle/pxkC7VqkKqFVkS1s6' target="_blank">Get Notified!</a></CallToAction>
          </Section> */}
          <Section
            // style={{ marginTop: '-6rem' }}
            bg='black'
            color="white">
            <Heading textAlign="center">Our Team</Heading>
            <br />
            <Flex justifyContent="space-around">
              <Contributor
                fullName="Sushrit Pasupuleti"
                title="CEO & CTO @ Braggi Solutions"
                avatar="/me.jpg"
              >
                <Flex>
                  <Button style={{ color: 'limegreen' }} variant="outlined" href='https://sushritpasupuleti.github.io/'>View Profile</Button>
                </Flex>
              </Contributor>
              <Contributor
                fullName="Vamsi Krishna Narra"
                title="Marketing and Design"
                avatar="obama.jpg"
              >
                <Flex>
                  <Button style={{ color: 'limegreen' }} variant="outlined" href='https://www.instagram.com/vamsi_28_/'>View Profile</Button>
                </Flex>
              </Contributor>
            </Flex>
          </Section>
          <Section
            id="jobs"
            heading='Join Us'
            subhead='We are looking for people who share our passion for learning, building, and teaching. If this sounds like you, feel free to apply!'
            width={1}
            bg='darkslategrey'
            color="white"
          >
            <CallToAction href='https://www.linkedin.com/company/skillshack-%E2%9A%A1/jobs/'>Browse Jobs</CallToAction>
          </Section>
          <Flex color="white" is="footer" alignItems="center" p={3}>
            <NavLink children="Instagram" href="https://www.instagram.com/braggi_solutions/" />
            <NavLink children="Twitter" href="https://twitter.com/skillShack_dev" />
            <NavLink children="YouTube" href="https://www.youtube.com/channel/UCUDlGMaGAQctgQJTRoBHgAw" />
            <Small ml="auto">© skillShack(⚡); 2021</Small>
          </Flex>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  )
}
