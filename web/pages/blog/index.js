import Link from 'next/link'
import Typography from '@material-ui/core/Typography';
import Post from '../../components/Posts';
import NavBar from '../../components/NavBar';
import Head from 'next/head'

export default function CategoriesPage(data) {
    console.log("Posts: ", data.posts);
    return (
        <div style={{ marginTop: '1rem', padding: '5%' }}>
            <Head>
                <title>skillShack(⚡).Blog;</title>
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
            <NavBar></NavBar>
            <Typography variant="h1" component="h2" gutterBottom>
                Home
            </Typography>
            {data.posts.nodes.map((post) => {
                return (
                    <Post details={post}></Post>
                )
            })}
        </div>
    )
}

export async function getStaticProps(context) {

    const res = await fetch('https://skillshack.in/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
          query AllPosts {
            posts {
                nodes {
                    id
                    title
                    content
                    excerpt
                    slug
                    author {
                        node {
                          name
                          nicename
                          nickname
                          slug
                          email
                          avatar {
                            url
                          }
                        }
                      }
                    featuredImage {
                        node {
                          sourceUrl
                        }
                      }
                  }
                }
        }
          `,
        })
    })

    console.log("check1")

    const json = await res.json()

    console.log("check2")

    console.log("Returned: ", json.data.posts.nodes)

    return {
        props: {
            posts: json.data.posts,
        },
    }

}